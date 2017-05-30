window.onload = function() {

var targetNumber = 0;
var crystalsTotal = [];
var wins = 0;
var losses = 0;


function startGame() {
	//generate a target number between 19 and 120
	targetNumber = Math.floor((Math.random()) * 120) + 19;
	$("#targetNumber").html(targetNumber);
	console.log(targetNumber);
	console.log("here's the target number");
};
 
startGame();

for (i = 0; i < 4; i++) {
	crystalsTotal = Math.floor(Math.random() * 13) +1;
	console.log(crystalsTotal);
};


}