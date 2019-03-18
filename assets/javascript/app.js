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

//This object contains all possibke answers... or it will
var allQuestions = [
  questionOne = {
    qOne: "Is it a question!?";
    aOne: "Yars";
    aTwo: "Nar!";
    aThree: "Maybe"
  }

  questionTwo = {
    qOne: "Is a dog a duck?";
    aOne: "Perhaps if not";
    aTwo: "No, ducks dont have paws";
    aThree: "Yes, dogs have bills";
  }

  questionThree = {
    qOne: "Where is the money?";
    aOne: "cmon, tony, i know you know where the money is";
    aTwo: "listen, you got two minutes before I smash this large container of jello over your head, i aint kiddin tony!";
    aThree: "No, dogs have bills";
  }

]
