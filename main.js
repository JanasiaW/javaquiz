
fucction check(){

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;


  if (question1 == "If statements") {
    correct++;
}
  if (question2 == "Operating systems") {
    correct++;
}
  if (question3 == "Hash stores keys which creates representation of data") {
    correct++;
}
  if (question4 == "Click button that says download") {
    correct++;
}
  if (question5 == "new_hash=") {
    correct++;
}
  if (question6 == "True") {
    correct++;
}
  if (question7 == "True") {
    correct++;
}
  if (question8 == "False") {
    correct++;
}
  if (question9 == "False") {
    correct++;
}
  if (question10 == "The.pop") {
    correct++;
}

var picture = ["img/dog.jpg", "img/obama.jpg", "img/toy.jpg"];
var message = ["Excellent job!", "You can do better next time.", "You got this! Try again."];
var score;

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = message;
document.getElementbyId("picture").src = pictures;
}
