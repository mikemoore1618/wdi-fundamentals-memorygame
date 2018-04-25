// Create array to store all card objects
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

// Create array to store cards in play
var cardsInPlay = [];

// Create function to check for match
var checkForMatch = function () {
  // Check if two cards match and provide uswe feedback
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

// Create function to represent user flipping card
var flipCard = function (cardId) {

  // Display card user just flipped in console.
  console.log("User flipped " + cards[cardId].rank);

  // Add card to array of cards in play
  cardsInPlay.push(cards[cardId].rank);

  // Display image path in console
  console.log(cards[cardId].cardImage)

  // Display suit in console
  console.log(cards[cardId].suit)

  // Check if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call checkForMatch function
    checkForMatch();
    // Empty cards in play array for next try
    cardsInPlay = [];
  }
};

flipCard(0);

flipCard(2);
