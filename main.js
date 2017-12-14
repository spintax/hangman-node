//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var Word = require('./word.js');
var Letter = require('./letter.js');
var prompt = require('prompt');

console.log("Lets play Beer Hangman!");
console.log("Guess a letter of the name of a Beer");
console.log("Goodluck!");
console.log("-----------------------------");
prompt.start();



game = {
 	wordBank: ['guinness', 'corona', 'coors', 'miller', 'newcastle', 'natty', 'smutty'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();




// var inquirer = require("inquirer");
// var curseWords = require("random-curse-words");
// var fs = require("fs");

// var word = require("./word.js");
// var letter = require("./letter.js");
// var guesses =


// // inquirer
// // user chooses what they want to do
// inquirer

//     .prompt([

//         {
//             type: "list",
//             message: "Do you want to play PG-13 Hangman?",
//             name: "userAction",
//             choices: [{
//                     name: "Yessir and howdy!"
//                 },
//                 {
//                     name: "Meh, I hate fun."
//                 }
//             ],

//         }
//     ])
//     .then(function (inquirerResponse) {

//         if (inquirerResponse.userAction === "Yessir and howdy!") {
//             console.log("Great!  You have 12 guesses to complete the word. Good Luck!")

        
//         (function (randomWords) {
//           console.log(randomWords);
//         })
//         }
//     })