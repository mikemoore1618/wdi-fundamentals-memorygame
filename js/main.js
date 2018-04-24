// Create an array to store all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Create array to store cards in play
var cardsInPlay = [];

// Create function to check for match
var checkForMatch = function () {
  // Check if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");

  }
};

// Create function to representa  user flipping card
var flipCard = function (cardId) {

  // Display card user flipped in console.
  console.log("User flipped " + cards[cardId]);

  // Add card to array of cards in play
  cardsInPlay.push(cards[cardId]);

  // Check if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call checkForMatch function
    checkForMatch();
  }
};


// For now, we are manually calling the flipCard function
// to represent a user's play
// Call the flipCard function, passing in an index as the argument
flipCard(0);
// Call the flipCard function, passing in an index as the argument
flipCard(2);