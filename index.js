//Count the compters
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;
for (var x = 0; x < officeItems.length; x++) {
  if (officeItems[x] === "computer") {
  count++;
  } 
}
console.log(count)

//18 or not 18

var peopleWhoWantToSeeMadMax = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    },{
      name: "Pat",
      age: 17,
      gender: "non-binary"  
    }
  ] 

for (var i = 0; i < peopleWhoWantToSeeMadMax.length; i ++) {
    if (peopleWhoWantToSeeMadMax[i]['age'] >= 18) {
        if (peopleWhoWantToSeeMadMax[i]['gender'] === "male") {
            console.log(peopleWhoWantToSeeMadMax[i]['name'] + " is old enough to see Mad Max. Please, let them in.")
        } else if (peopleWhoWantToSeeMadMax[i]['gender'] === "female") {
            console.log(peopleWhoWantToSeeMadMax[i]['name'] + " is old enough to see Mad Max. Please, let them in.")
        } else {
            console.log(peopleWhoWantToSeeMadMax[i]['name'] + " is old enough to see Mad Max. Please, let them in.")
        }
        //console.log(peopleWhoWantToSeeMadMax[i]['age'])
        // thanks Chris for your help
    }else {
        if (peopleWhoWantToSeeMadMax[i]['gender'] === "male") {
            console.log(peopleWhoWantToSeeMadMax[i]['name'] + " is only " + peopleWhoWantToSeeMadMax[i]['age'] + " years old. Don't let him watch.")
        } else if (peopleWhoWantToSeeMadMax[i]['gender'] === "female") {
            console.log(peopleWhoWantToSeeMadMax[i]['name'] + " is only " + peopleWhoWantToSeeMadMax[i]['age'] + " years old. Don't let her watch Mad Max.")
        } else {
            console.log(peopleWhoWantToSeeMadMax[i]['name'] + " is only " + peopleWhoWantToSeeMadMax[i]['age'] + " years old. Don't let them watch Mad Max.")
        }
        //console.log("under 18")
        // thanks Chris for your help
    }
}
