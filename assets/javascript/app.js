//// Trivia game
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
var timerRunning = false; // we will need this to activate the slideshow after we hit start
var time = 0;
var slideCount = 0;
var intervalId;

var allQuestions = [
  questionOne = {
    aOne: "Labrador Retreiver",
    aTwo: "Poodle",
    aThree: "Portuguese Water Dog",
    aFour: "Bernese Mountain Dog",
    answer: "Bernese Mountain Dog",
    image: "assets/images/BerneseMountainDog.jpg",
    },

  questionTwo = {
    aOne: "Saluki",
    aTwo: "French Bulldog",
    aThree: "Irish Wolfhound",
    aFour: "Corgi",
    answer: "French Bulldog",
    image: "assets/images/FrenchBulldog.jpg",
    },

  questionThree = {
    aOne: "Dachshund",
    aTwo: "Chihuahua",
    aThree: "Bulldog",
    aFour: "Pug",
    answer: "Dachshund",
    image: "assets/images/Dachshund.jpg",
    },

  questionFour = {
    aOne: "English Mastiff",
    aTwo: "Greyhound",
    aThree: "Old English Sheep Dog",
    aFour: "Portuguese Water Dog",
    answer: "Portuguese Water Dog",
    image: "assets/images/PortugueseWaterDog.jpg",
    },

  questionFive = {
    aOne: "German Shepherd",
    aTwo: "Golden Retriever",
    aThree: "Boxer",
    aFour: "Bulldog",
    answer: "Boxer",
    image: "assets/images/Boxer.jpg",
    },

  questionSix = {
    aOne: "Pomeranian",
    aTwo: "Poodle",
    aThree: "Bichon Frise",
    aFour: "Akita",
    answer: "Bichon Frise",
    image: "assets/images/BichonFrise.jpg",
    },

  questionSeven = {
    aOne: "Siberian Husky",
    aTwo: "Maltese",
    aThree: "Pug",
    aFour: "Beagle",
    answer: "Beagle",
    image: "assets/images/Beagle.jpg",
    },

  questionEight = {
    aOne: "Airedale Terrier",
    aTwo: "American Eskimo Dog",
    aThree: "Basenji",
    aFour: "Chow Chow",
    answer: "Chow Chow",
    image: "assets/images/ChowChow.jpg",
  },

  questionNine = {
    aOne: "Irish Setter",
    aTwo: "Basset Hound",
    aThree: "Beagle",
    aFour: "Dachshund",
    answer: "Basset Hound",
    image: "assets/images/BassetHound.jpg",
    },

  questionTen = {
    aOne: "Akita",
    aTwo: "Borzoi",
    aThree: "Saluki",
    aFour: "Papillon",
    answer: "Akita",
    image: "assets/images/Akita.jpg",
    },
  ];

$("#correctStat").text(correct);
$("#wrongStat").text(wrong);
$("#scoreStat").text(score);
$("#timer").text("00:00");

if (!timerRunning) {
  $(".main-card").append("<button id='startBtn'>" + "Start!" + "</button>");
}

//Most of the important variables are above.
//Below are the functions-etc that I need to have the questions/timers run

function setSlides() {
  //one
  $("#aOne").text(allQuestions[slideCount].aOne);
  $("#aOne").attr("data-value", allQuestions[slideCount].aOne);
  //two
  $("#aTwo").text(allQuestions[slideCount].aTwo);
  $("#aTwo").attr("data-value", allQuestions[slideCount].aTwo);
  //three
  $("#aThree").text(allQuestions[slideCount].aThree);
  $("#aThree").attr("data-value", allQuestions[slideCount].aThree);
  //four
  $("#aFour").text(allQuestions[slideCount].aFour);
  $("#aFour").attr("data-value", allQuestions[slideCount].aFour);
  //answer
  //$("#answer").text("Answer: " + allQuestions[slideCount].answer);
  $("#answer").attr("data-value", allQuestions[slideCount].aOne);
  //image
  $("#dogPic").attr("src", allQuestions[slideCount].image);

  console.log("time", time);
  console.log("correct", correct);
  slideCount++;
  console.log("count", slideCount);

  };



function begin() {
  setSlides();
  timerRunning = true;
  var slideDuration = setInterval(setSlides, 5000);
  intervalId = setInterval(count, 1000);


  $(".clicker").on("click", function() {
    var userGuess = $(this).attr("data-value");
    console.log(userGuess);
    var realAnswer = allQuestions[slideCount-1].answer;
    console.log(realAnswer);
    console.log(correct);
    console.log(wrong);
    if (userGuess === realAnswer) {
      correct++;
      $("#correctStat").text(correct);

    }
    else if (userGuess != realAnswer) {
      wrong++;
      $("#wrongStat").text(wrong);
    }
  });

  };



  function count() {

    time++;

    var converted = timeConverter(time);
    //console.log(converted);

    $("#timer").text(converted);

  };

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

function stop() {
  clearInterval(intervalId);
  timerRunning = false;
};

$(document).on("click", "#startBtn", begin);
$("h5").hover(
  function () {
    $(this).css("border-style", "solid");
  }, function() {
    $( this ).css("border-style", "none");
  });

});
