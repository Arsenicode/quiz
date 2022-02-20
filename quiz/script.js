const quizData = [
  {
    question: "How old is Lionel Messi?",
    a: "34",
    b: "30",
    c: "31",
    d: "36",
    correct: "a",
  },
  {
    question: "What is the most used programming language?",
    a: "java",
    b: "C",
    c: "python",
    d: "javascript",
    e: "C++",
    correct: "c",
  },
  {
    question: "Who is the president of the United States?",
    a: "Trump",
    b: "Micheal Jordan",
    c: "Joe Biden",
    d: "Angara Messi",
    correct: "c",
  },
  {
    question: "What does FC stand for?",
    a: "Fish Crab",
    b: "Fuck Cock",
    c: "Football Club",
    d: "Fifa Cup",
    correct: "c",
  },
  {
    question: "what is the best football club in the world?",
    a: "FC Barcelona",
    b: "Man City",
    c: "Liverpool",
    d: "Real madrid",
    correct: "a",
  },
];

const answersEls = document.querySelectorAll("input:checked");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  //deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answersEls = document.querySelectorAll("input:checked");

  let answer = undefined;

  answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
  });

  return answer;
}

//function deselectAnswers() {
//  answersEls.forEach((answerEl) => {
//    answerEl.checked = false; 
//  });
//}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  
     if (answer) {
       if (answer === quizData[currentQuiz].correct){
         score++;
       }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO: Show resuslts
      alert("You finished the quiz, get yourself an Orange Lemonade");
      quiz.innerHTML = `<h1>You answered correctly at  ${score}/${quizData.length}</h1>`;
    }
  }
  
});
