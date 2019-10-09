/* Grand-Theft-Democracy.js Javascript */
//Check errors with F12

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
