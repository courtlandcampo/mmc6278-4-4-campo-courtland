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

// https://nostarch.com/download/JS4K_ch7.pdf

//GLOBAL VARIABLES

var previousWordEl = document.querySelector('#previous-word')
var incorrectArray = []

var winsEl = document.getElementById(wins)
var lossesEl = document.getElementById(losses)

var wins = 0
var losses = 0

//PICKING RANDOM WORD AND REPLACING W UNDERSCORE
  var wordToGuess = document.querySelector('#word-to-guess')

  var wordAtPlay = words[Math.floor(Math.random() * words.length)] //SELECTS RANDOM WORD
  console.log(wordAtPlay)

  var answerArray = [] //PLACE TO HOLD UNDERSCORES
  for (var i = 0; i < wordAtPlay.length; i++) { //REVIEWS LETTERS
    answerArray[i] = "_"
  }
  wordToGuess.textContent = answerArray.join("")

//GUESSES REMAINING SET UP
  var remainingGuesses = document.querySelector('#remaining-guesses')


    var guessCount = 10

    remainingGuesses.innerHTML = guessCount
  
  var incorrectLettersEl = document.querySelector('#incorrect-letters')


document.onkeyup = function(e) {
  
  var key = e.key.toLowerCase()

  if (wordAtPlay.includes(key)){
    console.log("yep")
    for (let i = 0; i < wordAtPlay.length; i++) {
      if (wordAtPlay[i] === key){
        answerArray[i] = key
        wordToGuess.textContent = answerArray.join('')
      }
      }
    } else {
      console.log("nope");
      incorrectArray.push(key)
      guessCount--
      incorrectLettersEl.textContent = incorrectArray
      remainingGuesses.textContent = guessCount
    }
    console.log(key)
}
 


  




//wins and losses

//show previous word
previousWordEl.textContent = wordAtPlay

//correct and incorrect