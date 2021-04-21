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
  console.log(yourChoice);
  var humanChoice, botChoice;
  // humanChoice = yourChoice.id;
  // botChoice = yourChoice.id;
  // results = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won
  // message = finalMessage(results); // {'message': 'You Won', 'color': 'green'}
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissor'] [number]
}