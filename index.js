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

//var previousWord = document.getElementById(previous-word)

//var wins = document.getElementById(wins)
//var losses = document.getElementById(losses)

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


var incorrectLetters = document.querySelector('#incorrect-letters')

incorrectArray = []

document.onkeyup = function(e) {
  var key = e.key.toLowerCase()
  //compare picked word and letter + guesses
  console.log(key)
  

    for (var i = 0; i < wordAtPlay.length; i++) {
      if (wordAtPlay[i] === key){
        answerArray[i] = key
        wordToGuess.textContent = answerArray.join("")
        
      } //else if (wordAtPlay[i] !== key) {
        //console.log("bad gaga")
        //incorrectArray.push(key)
        //incorrectLetters.textContent = incorrectArray.join(", ")
        
        //guessCount--
      }
      
    }

    for (var w = 0; w < incorrectArray.length; w++) {
      if (wordAtPlay[i] !== key){
        incorrectArray.push(key)
        incorrectLetters.textContent = incorrectArray.join(", ")
      }
      
    }
  

  //wins and losses

  //show previous guesses, correct and incorrect
