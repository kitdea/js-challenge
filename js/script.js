// Challenge 1: Age in Days

function stoneAge() {
  var birthYear = prompt('What is your Year of Birth?');
  var age = (2021 - birthYear) * 365;
  // var ageCount = birthYear * 1;
  var h4 = document.createElement('h4');
  var textAnswer = document.createTextNode('You are ' + age + ' ' + ' days old.');
  h4.setAttribute('id', 'stoneAge');
  h4.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h4);
}

function reset() {
  document.getElementById('stoneAge').remove();
}

// Challenge 2: Generator

function generate() {
  var img = document.createElement('img');
  var div = document.getElementById('flexbox-img');
  img.src = "https://media.giphy.com/media/Oivne3ir8TzcA/giphy.gif";
  // img.src = "https://media.giphy.com/media/1pOprEJ24zcM8/giphy.gif";
  img.setAttribute('id', 'generate');
  div.appendChild(img);
}

function resetImg() {
  document.getElementById('generate').remove();
}

// Challenge 3: Rock, Paper, Scissor
function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  results = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won
  message = finalMessage(results); // {'message': 'You Won', 'color': 'green'}
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
    'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
  }

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return {'message': 'You lost!', 'color': 'red'};
  } else if (yourScore === 0.5) {
    return {'message': 'Draw!', 'color': 'yellow'};
  } else {
    return {'message': 'You won!', 'color': 'green'};
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var iconsDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissor': document.getElementById('scissor').src
  }

  // Remove all Icons
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + iconsDatabase[humanImageChoice] + "' style='filter: none; box-shadow: 1px 1px 12px rgb(31, 221, 255);'>"
  messageDiv.innerHTML = "<h3 style='color: " + finalMessage['color'] + "; font-size: 26px; '>" + finalMessage['message'] + "</h3>"
  botDiv.innerHTML = "<img src='" + iconsDatabase[botImageChoice] + "' style='filter: none; box-shadow: 1px 1px 12px rgb(255, 102, 102);'>"
  

  document.getElementById('flexbox-icons').appendChild(humanDiv);
  document.getElementById('flexbox-icons').appendChild(messageDiv);
  document.getElementById('flexbox-icons').appendChild(botDiv);
}

// Challenge 4: Change Color Buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i]);
}

// Color Change Value
function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'yellow') {
    buttonYellow();
  } else if (buttonThingy.value === 'green') {
    buttonGreen();
  } else if (buttonThingy.value === 'blue') {
    buttonBlue();
  } else if (buttonThingy.value === 'red') {
    buttonRed();
  } else if (buttonThingy.value === 'random') {
    randomColors();
  } else if (buttonThingy.value === 'reset') {
    buttonColorReset();
  }
}

document.querySelector('#yellow').addEventListener('click', buttonYellow);
document.querySelector('#green').addEventListener('click', buttonGreen);
document.querySelector('#blue').addEventListener('click', buttonBlue);
document.querySelector('#red').addEventListener('click', buttonRed);

// Buttons
function buttonYellow() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-warning');
  }
}

function buttonGreen() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonBlue() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-primary');
  }
}

function buttonRed() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

//Reset Button
function buttonColorReset() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

//Random Button
function randomColors() {
  let choices = ['btn-warning', 'btn-success', 'btn-primary', 'btn-danger'];

  for (let i=0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

// Challenge 5: Blackjack
let blackJackGame = {
  'you': {'score': '#your-blackjack-score', 'div': '#your-score-box', 'score': 0},
  'dealer': {'scoreSpan': '#dealer-blackjack-score', 'div': '#dealer-score-box', 'score': 0},
  'cards': ['2C', '2D', '2H', '2S','3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  'cardsMap': {'2C': 2, '2D': 2, '2H': 2, '2S': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,'10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]},
};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];

const hitSound = new Audio('img/sounds/swish.m4a');

document.querySelector('#blackjack-hit-btn').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-btn').addEventListener('click', blackjackDeal);

function blackjackHit() {
  let card = randomCards();
  console.log(card);
  showCard(card, YOU);
  updateScore(card, YOU);
  console.log(YOU['score']);
  showScore(YOU);
}

function randomCards() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackJackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
  let cardImage = document.createElement('img');
  cardImage.height = 130;
  cardImage.width = 90;
  cardImage.style.margin = '8px 8px';
  cardImage.src = `img/cards/${card}.png`;
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitSound.play();
}

function blackjackDeal() {
  let yourImages = document.querySelector('#your-score-box').querySelectorAll('img');
  let dealerImages = document.querySelector('#dealer-score-box').querySelectorAll('img');

  for (i=0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }

  for (i=0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
}

function updateScore(card, activePlayer) {
  if (card === 'A') {
  // If adding 11 keeps me below 21, add 11. Otherwise, add 1
    if (activePlayer['score'] + blackJackGame['cardsMap'][card] <= 21) {
      activePlayer['score'] += blackJackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackJackGame['cardsMap'][card][0];
    }
  } else {
  activePlayer['score'] += blackJackGame['cardsMap'][card];
  }
}

function showScore(activePlayer) {
  document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}