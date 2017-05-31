window.onload = function() {

// var crystalsArray = [];
// var crystal;
// var crystalsTotal = 0;
var wins = 0;
var losses = 0;
var crystalsArray = [];
var crystalsTotal = 0;

function startGame() {
	//generate a target number between 19 and 120
	targetNumber = Math.floor((Math.random()) * 120) + 19;
	$("#targetNumber").html(targetNumber);
	console.log(targetNumber);
	console.log("here's the target number");
	// // put 4 numbers into an array to be accessed on crystal clicks
	// var crystalsArray = [];
	 for (i = 0; i < 4; i++) {
	 var crystal = Math.floor(Math.random() * 12+1);
	 	crystalsArray.push(crystal);
	// 	return crystalsArray;
	 	console.log(crystalsArray);
	 };

};
 
startGame();

function checkScore() {
	if (crystalsTotal === targetNumber ) {
		alert("You win!");
		wins++;
		$("#wins").html("Wins: " + wins);
		resetGame();
	} else if (crystalsTotal > targetNumber) {
		alert("You lose!");
		losses++;
		$("#losses").html("Losses: " + losses);
		resetGame();
	}
}	

function resetGame() {
	targetNumber = 0;
	crystalsTotal = 0;
	crystalsArray = [];
	$("#currentScore").html(crystalsTotal);
	startGame();
}	

 // this should probably be one function

$("#crystal-1").on("click", function() {
	var crystalOne = crystalsArray[0];
	crystalsTotal = crystalsTotal + crystalOne;
	console.log(crystalsTotal);
	$("#currentScore").html(crystalsTotal);
	checkScore();
});

$("#crystal-2").on("click", function() {
	var crystalOne = crystalsArray[1];
	crystalsTotal = crystalsTotal + crystalOne;
	console.log(crystalsTotal);
	$("#currentScore").html(crystalsTotal);
	checkScore();
});

$("#crystal-3").on("click", function() {
	var crystalOne = crystalsArray[2];
	crystalsTotal = crystalsTotal + crystalOne;
	console.log(crystalsTotal);
	$("#currentScore").html(crystalsTotal);
	checkScore();
});

$("#crystal-4").on("click", function() {
	var crystalOne = crystalsArray[3];
	crystalsTotal = crystalsTotal + crystalOne;
	console.log(crystalsTotal);
	$("#currentScore").html(crystalsTotal);
	checkScore();
});

}