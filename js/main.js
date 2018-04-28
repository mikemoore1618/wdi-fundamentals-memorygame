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
  // Check if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

// Create function to represent user flipping card
var flipCard = function () {
  // Get data-id of card that was just flipped and cache it
  cardId = this.getAttribute('data-id');
  console.log(cardId);

  // Add rank to array of cards in play
  cardsInPlay.push(cards[cardId].rank);

  // Display card's image
  this.setAttribute('src', cards[cardId].cardImage);

  // Check if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call checkForMatch function
    checkForMatch();
    // Empty cards in play array for next try
    cardsInPlay = [];
  }
};

// Function to create board
var createBoard = function () {
  // Loop through cards array to create card elements for board
  for (var i = 0; i < cards.length; i++) {
    // Create img element which will be used as a card
    var cardElement = document.createElement('img');

    // Set src attribute to display back of card image
    cardElement.setAttribute('src', 'images/back.png');

    // Set card's 'data-id' attribute to be index of current element
    // data- attributes are meant to store data about an element ot tied to style.
    cardElement.setAttribute('data-id', i);

    // Add event listener so that when card is clicked, 
    // function flipCard will be executed
    cardElement.addEventListener('click', flipCard);

    // Append card to board
    document.getElementById('game-board').appendChild(cardElement);

  }

}

// Call createBoard function to create board.
createBoard();