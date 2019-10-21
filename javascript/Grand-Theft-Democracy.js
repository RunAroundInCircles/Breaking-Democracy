/* Grand-Theft-Democracy.js Javascript */
//Check errors with F12

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
class Party {
    constructor(partyname){
      this.name = partyname
      this.personalites = [1,2,3]
    }

  }


class Candidate {
  constructor(firstname, lastname,party){
    this.firstname = firstname,
    this.lastname = lastname,
    this.party = new Party(party),
    this.personality = Math.floor(Math.random() * 3)
  }
}

class Event {
  constructor(eventName, description, actions, candidate){
    this.name = eventName,
    this.description = description,
    this.actions = actions,
    this.candidate = candidate
  }
}

var candidateList = [];
var partyList = [];
var eventList = [];

function myFunction(){
  generateCandidate("Bob", "Smith", "Democrat")
  generateCandidate("Lisa", "Simpson", "Republican")
  generateCandidate("Jordan", "Apple", "Independent")
  for(i = 0; i < partyList.length; i++){
    alert(candidateList[i].firstname + " " + partyList[i].name)
  }
}


function generateCandidate(firstname, lastname, partyname){
  partyExists = false

  for (i = 0 ; i < partyList.length; i++) {
    if(partyList[i].name == partyname){
      partyExists = true
      break;
    }
  }

  if (!partyExists) {
    partyList.push(new Party(partyname))
  }
  candidateList.push(new Candidate(firstname,lastname,partyname))
}


// Try edit message
const data = {
  minimum: 0,
  message: Math.floor(Math.random() * (3) ),
  party: "D"
}


console.log(data)
