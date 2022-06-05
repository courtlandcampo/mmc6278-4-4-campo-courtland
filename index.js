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

var wins = 0
var losses = 0

var winsEl = document.querySelector('#wins')
winsEl.textContent = wins

var lossesEl = document.querySelector('#losses')
lossesEl.textContent = losses



var victory = false

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
    var correctGuesses = 0

    remainingGuesses.innerHTML = guessCount
  
  var incorrectLettersEl = document.querySelector('#incorrect-letters')


// GAME RESET
function newGame () {
  console.log("reset ready") //working
  var guessCount = 10 //working
  remainingGuesses.textContent = guessCount //working
  incorrectLettersEl.innerHTML = "" //working
  var wordAtPlay = words[Math.floor(Math.random() * words.length)] //re-SELECTS RANDOM WORD
  console.log(wordAtPlay)

  var answerArray = [] //PLACE TO HOLD UNDERSCORES
  for (var i = 0; i < wordAtPlay.length; i++) { //REVIEWS LETTERS
    answerArray[i] = "_"
  }
  wordToGuess.textContent = answerArray.join("")

  document.onkeyup = function game(play) {
    var key = play.key.toLowerCase() //convert keys to lowercase
  
    if (wordAtPlay.includes(key)){
      for (let i = 0; i < wordAtPlay.length; i++) {
        if (wordAtPlay[i] === key){
          answerArray[i] = key 
          wordToGuess.textContent = answerArray.join('') //replace blank w correct letter
  
        }
        }
      } else {
        incorrectArray.push(key) //add incorrect letters to array
        guessCount-- //reduce number of guesses
        incorrectLettersEl.textContent = incorrectArray //publish letters to site
        remainingGuesses.textContent = guessCount //publish guesses remaining to site
      }
      console.log(answerArray.join(''), wordAtPlay)
      
     
      if (answerArray.join('') === wordAtPlay){
      console.log("winner, winner chicken dinner!")
  
      wins++
      winsEl.textContent = wins
  
      newGame()
      }
  
      if (answerArray.join('') !== wordAtPlay && guessCount < 1) {
      console.log("haha loser")
  
      losses++
      lossesEl.textContent = losses
  
      newGame()
      }
  }
}

// BASIC GAME STRUCTURE
document.onkeyup = function game(play) {
  var key = play.key.toLowerCase() //convert keys to lowercase

  if (wordAtPlay.includes(key)){
    for (let i = 0; i < wordAtPlay.length; i++) {
      if (wordAtPlay[i] === key){
        answerArray[i] = key 
        wordToGuess.textContent = answerArray.join('') //replace blank w correct letter

      }
      }
    } else {
      incorrectArray.push(key) //add incorrect letters to array
      guessCount-- //reduce number of guesses
      incorrectLettersEl.textContent = incorrectArray //publish letters to site
      remainingGuesses.textContent = guessCount //publish guesses remaining to site
    }
    console.log(answerArray.join(''), wordAtPlay)
    
   
    if (answerArray.join('') === wordAtPlay){
    console.log("winner, winner chicken dinner!")

    wins++
    winsEl.textContent = wins

    newGame()
    }

    if (answerArray.join('') !== wordAtPlay && guessCount < 1) {
    console.log("haha loser")

    losses++
    lossesEl.textContent = losses

    newGame()
    }
}