// We need to assign each of the ranger-devs to a super-blinding light bulb based on their station number.

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) { // create starter function
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  for (var i = 1; i <= location.numRangers; i++) { // accessing the numRangers property & looping through numRangers (3 in total) --> not an array so it's important to note that the count begins at 1! 
    var ranger = location["ranger"+i]; // using count from above we're creating ranger1, ranger2, and ranger3 by appending the ranger string with the number --> this will become for example: location.ranger1. This allows us to pinpoint the ranger object within the location object. This is then stored in a rangers variable
    var name = ranger.name; // allows us to access the "name" property in the ranger object
    var superblinder = location.weaponBulbs[ranger.station-1][0]; // adding the name of the correct super-blinding light bulb from the weaponBulbs array to the list. To access the name, we can first use [0] as the name is the first index of the superBlinders subarray. Since we now need to access the index of the main array based on the station number, we can use the station number and subtract 1 per working with array indices.  
    list += name + ", man the " + superblinder + "!\n"; // concactenate name + superblinder variable with requested strings and store that back into the list variable 
  }

  alert(list); // make list variable pop up on screen
}

dontPanic(lighthouseRock); // run function 


