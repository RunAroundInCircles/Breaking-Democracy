/* Grand-Theft-Democracy.js Javascript */

//Global Constants
//Screen Size
const WIDTH = 1200;
const HEIGHT = 800;

var start = null;
var currentInput = {

}
var priorInput = {

}

//creates a screen to display on
var screen = document.createElement('canvas');
var screenCtx = screen.getContext('2d');
screen.height = HEIGHT;
screen.width = WIDTH;
document.body.appendChild(screen);

//creates a back buffer for the screen ot assist with rendering
var backBuffer = document.createElement('canvas');
var backBufferCtx = screen.getContext('2d');
screen.height = HEIGHT;
screen.width = WIDTH;

//sets up the button that starts the game
var button = document.getElementById('button');
button.addEventListener('click', function(event) {
  event.preventDefault();
  startup();
});

//function to setup the game after the start button is clicked
function startup() {

  window.requestAnimationFrame(gameLoop);
}

//function that runs the idle state of the game, taking input and rendering the screen
function gameLoop(timeStamp) {
  if(!start) start = timeStamp;
  var elapsedTime = timeStamp - start;
  start = timeStamp;
  update(elapsedTime);
  render(backBufferCtx);
  copyInput();
  screenCtx.drawImage(backBuffer, 0, 0);
  window.requestAnimationFrame(gameLoop);
}

function update(elapsedTime) {

}

function render(ctx) {
  //reset the screen
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,WIDTH,HEIGHT);
}

function copyInput() {
  priorInput = JSON.parse(JSON.stringify(currentInput));
}

//Describes the party for a Candidate

//Check errors with F12
class Party {
    constructor(Partyname){
      this.name = Partyname
    }
    personalites = [1,2,3]
  }


class Candidate{
  constructor(firstname, lastname,party){
    this.firstname = firstname,
    this.lastname = lastname,
    this.party = new Party(party),
    this.personality = Math.floor(Math.random() * 3)
  }
}

function myFunction(){
  alert("ENTERED");
}

//var List = require("collections/list");
//var candidateList = new List();
//var partiesList = new List();

function generateCandidate(firstname, lastname, partyname){
  if(partiesList.findValue()){

  }

  var candidate = new Candidate(firstname,lastname,partyname);
  candidateList.add(candidate)
}


// Try edit message
const data = {
  minimum: 0,
  message: Math.floor(Math.random() * (3) ),
  party: "D"
}

//$('#msg').html(personalities[data.message + data.minimum].toString(10))

console.log(data)
