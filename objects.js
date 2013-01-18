function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert("No location support");
  }
}

function displayLocation(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var place = "Latitude: " + lat + " Longitude: " + lon;
  console.log(place);
}

$(document).ready( function() {
  getMyLocation();
});

function Character(name, race, job, battlecry) {
  this.name = name;
  this.race = race;
  this.job = job;
  this.battlecry = battlecry;

  this.description = function() {
    document.write(this.name + " is a " + this.race + " " + this.job + "<br />");
  };

  this.shout = function() {
    document.write(this.name + " says: " + this.battlecry + "<br />");
  };
}

var barakas = new Character("Barakas", "Teifling", "Ranger", "SUMMER IS COMING");

barakas.description();
barakas.shout();

document.write("<br />");

var chafa = new Character("Chafa", "Human", "Theif", "What's in *your* wallet?");

chafa.description();
chafa.shout();
