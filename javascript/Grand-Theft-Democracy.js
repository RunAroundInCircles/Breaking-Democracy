/* Grand-Theft-Democracy.js Javascript */

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
