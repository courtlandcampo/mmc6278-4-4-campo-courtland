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

  remainingGuesses.innerHTML = 10


var incorrectLetters = document.querySelector('#incorrect-letters')

document.onkeyup = function(e) {
  var key = e.key.toLowerCase()
  
  //compare picked word and letter + guesses
  
  console.log(key)
  incorrectArray = []

  var remainingLetters = wordAtPlay.length
  console.log(remainingLetters)
  

    for (var i = 0; i < wordAtPlay.length; i++) {
      if (wordAtPlay[i] === key){
        console.log("bitch")
        answerArray[i] = key
        wordToGuess.textContent = answerArray.join("")
      } else if (wordAtPlay[i] !== key) {
        //console.log("lol")
        //incorrectArray.push(key)
        //console.log(incorrectArray)
        //incorrectLetters.textContent = incorrectArray.join(", ")
        
        remainingGuesses--
      }
      
    }
  

  //wins and losses

  //show previous guesses, correct and incorrect
}