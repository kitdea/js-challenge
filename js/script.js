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


function reset() {
  document.getElementById('generate').remove();
}