// Trivia game
// A list of features I need to design
////shows one question until:
/////////the player answers it
/////////or their time runs out.
////when they hover over the answer, it is highlighted.
////when they click, it will:
////////show 'congrats' if they are correct
////////show 'oops' if they are wrong. and show the correct answer.
////////wait 3 seconds, move on to next question
////////from directions:"The scenario is similar for wrong answers and time-outs.'
////If they run out of time, tell the player:
////////"time's up" and display the correct answer.
////////Wait a few seconds, then show the next question.
////On the final screen, show the number of correct answers,
///////incorrect answers, and an option to restart the game
///////(without reloading the page).
/////// first and last slide will contain a start and a restart button
$(document).ready(function() {

  //opening stats//
var correct = 0;
var wrong = 0;
var score = "";

$("#correctStat").text(correct);
$("#wrongStat").text(wrong);
$("#scoreStat").text(score);

$(".main-card").append("<button " + " id='startBtn'>" + "Start!" + "</button>");

var time = 0;
var count = 0; //we will need this to track the number of questions
var intervalId;

$("#timer").text("00:00");

var timerRunning = false; // we will need this to activate the slideshow after we hit start

//This object contains all possible questions, answers... or, soon it will
function imagePlacer() {
  $("div#dogpic").append("<img" + " src='assets/images/BerneseMountainDog.jpg' " + "id='dogPic'" + "></img>");
};

var allQuestions = [
  questionOne = {
    aOne: "Labroder Retreiver",
    aTwo: "Poodle",
    aThree: "Portugese Water Dog",
    aFour: "Bernese Mountain Dog",
    answer: "Bernese Mountain Dog",
    //key(image): pair(this needs to be the insertion of a string which is 'ready' use, as a variable)
  },

  questionTwo = {
    aOne: "Labroder Retreive",
    aTwo: "Poodl",
    aThree: "Portugese Water Do",
    aFour: "Daschun",
    answer: "Portugese Water Do"
  },

  questionThree = {
    aOne: "Labroder Retreiv",
    aTwo: "Pood",
    aThree: "Portugese Water D",
    aFour: "Daschu",
    answer: "Portugese Water D"
  },

  questionFour = {
    aOne: "Labroder Retrei",
    aTwo: "Poo",
    aThree: "Portugese Water ",
    aFour: "Dasch",
    answer: "Portugese Water "
  },

  questionFive = {
    aOne: "Labroder Retre",
    aTwo: "Po",
    aThree: "Portugese Water",
    aFour: "Dasc",
    answer: "Portugese Water"
  },

  questionSix = {
    aOne: "Labroder Retr",
    aTwo: "P",
    aThree: "Portugese Wate",
    aFour: "Das",
    answer: "Portugese Wate"
  },

  questionSeven = {
    aOne: "Laoder Retreir",
    aTwo: "Poodle",
    aThree: "rtugese Water g",
    aFour: "Daschund",
    answer: "rtugese Water Dog"
  },

  questionEight = {
    aOne: "Labrodtreiver",
    aTwo: "Poodle",
    aThree: "Port Water Dog",
    aFour: "Daschund",
    answer: "Port Water Dog"
  },

  questionNine = {
    aOne: "Labror",
    aTwo: "Poodle",
    aThree: "Por Dog",
    aFour: "Daschund",
    answer: "Por Dog"
  },

  questionTen = {
    aOne: "Labroder Retreiver",
    aTwo: "Poodle",
    aThree: "Pougese Water Dog",
    aFour: "DaschundPortu",
    answer: "Darv"
  },
];

//Most of the important variables and their "assignment"-functions to html are above.
//Below are the functions-etc that I need to have the questions/timers run

console.log(allQuestions[0].aOne, allQuestions[1].aOne);

function start() {
  if (!timerRunning) {
  timerRunning = true;
  intervalId = setInterval(count, 2000);

  $("#aOne").text(allQuestions[0].aOne);
  $("#aTwo").text(allQuestions[0].aTwo);
  $("#aThree").text(allQuestions[0].aThree);
  $("#aFour").text(allQuestions[0].aFour);
  $("#answer").text("Answer: " + allQuestions[0].answer);
  $("#dogPic").append(allQuestions[0].image);

  imagePlacer();
  };

};

$(document).on("click", "#startBtn", start);



function count() {

  // DONE: increment time by 1, remember we cant use "this" here.
  time++;

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);
  console.log(converted);

  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#timer").text(converted);
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

});
