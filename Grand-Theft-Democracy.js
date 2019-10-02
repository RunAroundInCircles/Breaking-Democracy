/* Grand-Theft-Democracy.js Javascript */

//Describes the party for a Candidate
class Party = {
    constructor(Partyname){
      this.name = Partyname
    }
    this.personalites = [1,2,3]
  }


class Candidate{
  constructor(firstname, lastname,party){
    this.firstname = firstname,
    this.lastname = lastname,
    this.party = new Party(party),
    this.personality = Math.floor(Math.random() * 3)
  }
}

// Try edit message
const data = {
  minimum: 0,
  message: Math.floor(Math.random() * (3) ),
  party: "D"
}

$('#msg').html(personalities[data.message + data.minimum].toString(10))

console.log(data)
