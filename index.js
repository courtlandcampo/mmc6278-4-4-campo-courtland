var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

//GLOBAL VARIABLES

var wordToGuess = document.querySelector('#word-to-guess')
//var previousWord = document.getElementById(previous-word)
//var incorrectLetters = document.getElementById(incorrect-letters)
//var remainingGuesses = document.getElementById(remaining-guesses)

//var wins = document.getElementById(wins)
//var losses = document.getElementById(losses)

  //PICKING RANDOM WORD AND REPLACING W UNDERSCORE

  var wordAtPlay = words[Math.floor(Math.random() * words.length)] //SELECTS RANDOM WORD

  var answerArray = [] //PLACE TO HOLD UNDERSCORES
  for (var i = 0; i < wordAtPlay.length; i++) { //REVIEWS LETTERS
    answerArray[i] = "_"
  }
  wordToGuess.textContent = answerArray.join("")

document.onkeyup = function() {
  //filter key presses?

  //console.log(key) //access user key press(es)

  //display number of underscores
  
  //compare picked word and letter + guesses

  //wins and losses

  //show previous guesses, correct and incorrect
}