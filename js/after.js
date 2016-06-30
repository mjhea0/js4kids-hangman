// Pick a random word
function pickWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

// Set up the answer array
function setupAnswerArray(word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
}

// Show the player their progress
function showPlayerProgress(answerArray) {
  alert(answerArray.join(" "));
}

// Get a guess from the player
function getGuess() {
  return prompt("Guess a letter, or click Cancel to stop playing.");
}

// Update the game state with the guess
function updateGameState() {
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }
}

// Show the answer and congratulate the player
function showAnswerAndCongratulatePlayer() {
  alert(answerArray.join(" "));
  alert("Good job! The answer was " + word);
}

// Create an array of words
var words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake"
];

var word = pickWord(words);
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

// The game loop
while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    // Exit the game loop
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    updateGameState();
  }
  // The end of the game loop
}

showAnswerAndCongratulatePlayer();