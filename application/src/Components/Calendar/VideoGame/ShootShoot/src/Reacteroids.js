import React, { Component } from 'react';
import Ship from './Ship';
import Asteroid from './Asteroid';
import { randomNumBetweenExcluding } from './helpers';
import asteroidsMusicWAV from '../../../../../Resources/Music/AsteroidsLoopable.wav';
import asteroidsMusicMP3 from '../../../../../Resources/Music/AsteroidsLoopable.mp3';

/*
Contains the event key number for each key pressed by the user.
Helps with event handaling
 */
const KEY = {
  LEFT:  37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
};

export class Reacteroids extends Component {

  constructor(props) {
    super(props);
    /*
    Size of the window for the game
     */
    this.state = {
      screen: {
        width: window.innerWidth / 2.5,
        height: window.innerHeight /2.8,
        ratio: window.devicePixelRatio || 1,
      },
      context: null,
      //The key array holds onto whether any of the keys are pressed (0 if not pressed, 1 if pressed)
      keys : {
        left  : 0,
        right : 0,
        up    : 0,
        down  : 0,
        space : 0,
      },
      asteroidCount: 3, // The number of initial asteroids at the beginning of the round
      currentScore: 0, // The player's score
      topScore: localStorage['topscore'] || 0, // The local highscore (highscores are saved on the player's local machine)
      inGame: false, // Determines if the player is in game
      playMusic: true // Determines if the game music should be played
    }

	this.result = 0;
    this.ship = [];
    this.asteroids = [];
    this.bullets = [];
    this.particles = [];
  }

/**
 * Resizes the game if the window is resized
 * @param  {[type]} value Value from the event handler
 * @param  {[type]} e     Event Handler
 */
  handleResize(value, e){
    this.setState({
      screen : {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      }
    });
  }

/**
 * Handles user input from the user and tells if the player has pressed a key
 * @param  {[type]} value Determines if the key was pressed
 * @param  {[type]} e     The event handler for the eky
 * @return {[type]}       Sets the keys array to the current values of the keys
 */
  handleKeys(value, e){
    let keys = this.state.keys;
    if(e.keyCode === KEY.LEFT   || e.keyCode === KEY.A) keys.left  = value;
    if(e.keyCode === KEY.RIGHT  || e.keyCode === KEY.D) keys.right = value;
    if(e.keyCode === KEY.UP     || e.keyCode === KEY.W) keys.up    = value;
    if(e.keyCode === KEY.SPACE) keys.space = value;
    this.setState({
      keys : keys
    });
  }

/**
 * Adds event listeners to check if a key is pressed. Adds the canvas for the game to the context
 * Starts the game and starts animation
 */
  componentDidMount() {
    // Event listeners used to tell if keys have been pressed or the window has been resized
    window.addEventListener('keyup',   this.handleKeys.bind(this, false));
    window.addEventListener('keydown', this.handleKeys.bind(this, true));
    window.addEventListener('resize',  this.handleResize.bind(this, false));

    // Creates a canvas with 2d graphics
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
    // Starts the game
    this.startGame();
    // Allows for frames to be changed which creates animation
    requestAnimationFrame(() => {this.update()});
  }

  /**
   * Removes the eventlisters from the window
   */
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeys);
    window.removeEventListener('keydown', this.handleKeys);
    window.removeEventListener('resize', this.handleResize);
  }

/**
 * Updates animation
 */
  update() {
    const context = this.state.context; //Retrieves the canvas
    const keys = this.state.keys; //Determines which keys have been pressed
    const ship = this.ship[0];

    //Saves the current canvas and scales the canvas to the screen
    context.save();
    context.scale(this.state.screen.ratio, this.state.screen.ratio);

    // Motion trail
    context.fillStyle = '#000';
    context.globalAlpha = 0.4;
    context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
    context.globalAlpha = 1;

    // Next set of asteroids
    if(!this.asteroids.length){
      let count = this.state.asteroidCount + 1; // Creates more asteroids if needed
      this.setState({ asteroidCount: count }); // Updates the count of the asteroids
      this.generateAsteroids(count) // Animates the asteroids
    }

    // Check for colisions
    this.checkCollisionsWith(this.bullets, this.asteroids); // Check if bullets have hit an asteroid
    this.checkCollisionsWith(this.ship, this.asteroids); // Check if asteroids have hit player

    // Remove or render
    this.updateObjects(this.particles, 'particles') // Changes position of particles or removes them
    this.updateObjects(this.asteroids, 'asteroids') // Changes position of asteroids, breaks them, or removes them
    this.updateObjects(this.bullets, 'bullets') // Changes position of bullets or removes them
    this.updateObjects(this.ship, 'ship') // Changes position of ship or removes ship

    // Updates canvas to the new animations
    context.restore();

    // Creates the next frame of animation
    requestAnimationFrame(() => {this.update()});
  }

/**
 * If the player has scored points update the score
 * @param {[type]} points The number of points the player has just earned
 */
  addScore(points){
    // Checks if the player is still in game
    if(this.state.inGame){
      // Updates the players score
      this.setState({
        currentScore: this.state.currentScore + points,
      });
    }
  }

/**
 * Starts the game, stops the main music playing, begins intial placement of objects
 * @return {[type]} [description]
 */
  startGame(){
    this.setState({
      inGame: true,
      currentScore: 0,
    });

    //Disable main music loop
    this.props.updateMainMusic(false);

    //Set the volume of the game to a lower volume
    var audio = document.getElementById("game-music");
    audio.volume = 0.5;
    // Creates the new ship
    let ship = new Ship({
      position: {
        x: this.state.screen.width/2,
        y: this.state.screen.height/2
      },
      create: this.createObject.bind(this), // Allows for the ship to be able to create other objects
      onDie: this.gameOver.bind(this) // If the player dies then go to gameOver
    });
    this.createObject(ship, 'ship'); // Create the intial ship

    // Make asteroids
    this.asteroids = [];
    this.generateAsteroids(this.state.asteroidCount)
  }

  /**
   * If the player has died then the player is no longer in game.
   * Renable main music and determine the players influence based on their score in the asteroids game.
   */
  gameOver(){
    this.setState({
      inGame: false,
    }

  );

  //Re-enable main music and disable game Music
  this.props.updateMainMusic(true);
  this.setState({playMusic : false});

    // Replace top score
    if(this.state.currentScore > this.state.topScore){
      this.setState({
        topScore: this.state.currentScore,
      });
      localStorage['topscore'] = this.state.currentScore;
    }

    //Percent = score/137 - .50 so that -.50 is worst and best is .50
    //137 comes from an average found while testing so that average change is 50 percent
	  var percent = (this.state.currentScore/137)-.50;
    percent = percent.toFixed(2);
    if(percent > .50) percent = .50;
	  this.props.callbackFromMain(this.props.eventID, percent);
  }

  /**
   * Creates the asteroids for the game
   * @param  {[type]} howMany How many asteroids will be rendered
   */
  generateAsteroids(howMany){
    let asteroids = [];
    let ship = this.ship[0];
    for (let i = 0; i < howMany; i++) {
      let asteroid = new Asteroid({
        size: 80,
        position: {
          x: randomNumBetweenExcluding(0, this.state.screen.width, ship.position.x-60, ship.position.x+80),
          y: randomNumBetweenExcluding(0, this.state.screen.height, ship.position.y-60, ship.position.y+80)
        },
        create: this.createObject.bind(this),
        addScore: this.addScore.bind(this)
      });
      this.createObject(asteroid, 'asteroids');
    }
  }

  createObject(item, group){
    this[group].push(item);
  }

  updateObjects(items, group){
    let index = 0;
    for (let item of items) {
      if (item.delete) {
        this[group].splice(index, 1);
      }else{
        items[index].render(this.state);
      }
      index++;
    }
  }

  checkCollisionsWith(items1, items2) {
    var a = items1.length - 1;
    var b;
    for(a; a > -1; --a){
      b = items2.length - 1;
      for(b; b > -1; --b){
        var item1 = items1[a];
        var item2 = items2[b];
        if(this.checkCollision(item1, item2)){
          item1.destroy();
          item2.destroy();
        }
      }
    }
  }

  checkCollision(obj1, obj2){
    var vx = obj1.position.x - obj2.position.x;
    var vy = obj1.position.y - obj2.position.y;
    var length = Math.sqrt(vx * vx + vy * vy);
    if(length < obj1.radius + obj2.radius){
      return true;
    }
    return false;
  }

  render() {
    let endgame;
    let message;

    //Find the game-music element and decrease it's volume to 0.2
    var audio = document.getElementById("game-music");
    if(audio != null){
      if(audio.volume != 0.2){
        audio.volume = 0.2
      }
    }


    if (this.state.currentScore <= 0) {
      message = '0 points... So sad.';
    } else if (this.state.currentScore >= this.state.topScore){
      message = 'Top score with ' + this.state.currentScore + ' points. Woo!';
    } else {
      message = this.state.currentScore + ' Points though :)'
    }

    if(!this.state.inGame){



      endgame = (
        <div className="endgame">
          <p>Game over, man!</p>
          <p>{message}</p>
        </div>

      )

    }

    return (
      (this.state.playMusic)
      ?(
        <div>
          <audio autoPlay loop id="game-music">
            <source src={asteroidsMusicWAV} type="audio/wav"></source>
            <source src={asteroidsMusicMP3} type="audio/mpeg"></source>
            Your Browser does not support the audio element.
            </audio>

            { endgame }
            <canvas ref="canvas"
            width={this.state.screen.width * this.state.screen.ratio}
            height={this.state.screen.height * this.state.screen.ratio}
            />
            </div>
    )
    :
    (
      <div>
        <audio autoPlay muted loop id="game-music">
          <source src={asteroidsMusicWAV} type="audio/wav"></source>
          <source src={asteroidsMusicMP3} type="audio/mpeg"></source>
          Your Browser does not support the audio element.
          </audio>

          { endgame }
          <canvas ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
          />
          </div>
    )
    );
  }
}
