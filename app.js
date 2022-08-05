
// var quizDetail={
//     title
//  template literal ```} 

var questions =[
    {
        question: "Css stands for",
        option: ["Cascading style sheet", "color sheet", "combo sheet"],
        correctAnswer:"Cascading style sheet",
    },
    {
        question: "HTML stands for",
        option: ["HTML", "HyperLink", "HyperLinkMarkupLanguage"],
        correctAnswer:"HyperLinkMarkupLanguage",
    },
    {
        question: "OOP stands for",
        option: ["Operation", "Object Oriented Programming Language", "combo sheet"],
        correctAnswer:"Object Oriented Programming Language",
    },
    {
        question: "PAF stands for",
        option: ["Cascading style sheet", "PAF", "Pakistan Airforce"],
        correctAnswer:"Pakistan Airforce",
    },
    {
        question: "PSL stands for",
        option: ["Pakistan Superleague", "PSL", "Pakistan"],
        correctAnswer:"Pakistan Superleague",
    }
]


var question = document.getElementById("question");
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var answerParent = document.getElementById("answerParent");
var indexNumber = 0;
var score = 0;



function startQuiz() {
    question.innerHTML = questions[indexNumber].question;
    answerParent.innerHTML = "";
    for (var i = 0; i < questions[indexNumber].option.length; i++) {
      answerParent.innerHTML += `<div class="col-md-6 py-2">
      <button onClick = "checkQuestion('${questions[indexNumber].option[i]}',
     '${questions[indexNumber].correctAnswer}')" class="btn w-100 btn-info">
      ${questions[indexNumber].option[i]}</button>
      </div>`;
    }
    totalQuestions.innerHTML = questions.length;
    currentQuestion.innerHTML = indexNumber + 1;
  }
  startQuiz();
  
  function nextQuestion() {
    if (indexNumber == questions.length - 1) {
      alert("quiz complete");
    } else {
      indexNumber = indexNumber + 1;
      startQuiz();
    }
  }
  
  function checkQuestion(elem, correctOption) {
    console.log(elem, correctOption, elem == correctOption)
  
    if (elem == correctOption) {
      score = score + 1;
    }
  
  
    console.log(score);
  
    var allOptionBtns = answerParent.getElementsByTagName("button");
    for (let i = 0; i < allOptionBtns.length; i++) {
      console.log(allOptionBtns[i].innerText == correctOption, `===>Correct`)
      allOptionBtns[i].disabled = true;
      if (allOptionBtns[i].innerText == correctOption) {
        allOptionBtns[i].className += " bg-success";
      } else {
        allOptionBtns[i].className += " bg-danger";
      }
    }
  }
  