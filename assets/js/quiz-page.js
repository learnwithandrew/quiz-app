const quizData = [
    {
        question: "Which language runs in a web browser?",
        choice_1: "Java",
        choice_2: "C",
        choice_3: "Python",
        choice_4: "JavaScript",
        correctChoice: "choice_4",
    },
    {
        question: "What does CSS stand for?",
        choice_1: "Central Style Sheets",
        choice_2: "Cascading Style Sheets",
        choice_3: "Cascading Simple Sheets",
        choice_4: "Cars SUVs Sailboats",
        correctChoice: "choice_2",
    },
    {
        question: "What does HTML stand for?",
        choice_1: "Hypertext Markup Language",
        choice_2: "Hypertext Markdown Language",
        choice_3: "Hyperloop Machine Language",
        choice_4: "Helicopters Terminals Motorboats Lamborginis",
        correctChoice: "choice_1",
    },
    {
        question: "What year was JavaScript launched?",
        choice_1: "1996",
        choice_2: "1995",
        choice_3: "1994",
        choice_4: "none of the above",
        correctChoice: "choice_2",
    },
];

// DOM manipulation
const quiz = document.getElementById("quiz");
const choices = document.querySelectorAll(".choice");
const question = document.getElementById("question");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = function () {
    choices.forEach(function (choice) {
        choice.checked = false;
    });
};

const getSelected = function () {
    let answer;
    choices.forEach(function (choice) {
        if (choice.checked) {
            answer = choice.id;
        }
    });
    return answer;
};

const loadQuiz = function () {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    choice1.innerText = currentQuizData.choice_1;
    choice2.innerText = currentQuizData.choice_2;
    choice3.innerText = currentQuizData.choice_3;
    choice4.innerText = currentQuizData.choice_4;
};

loadQuiz();

submitButton.addEventListener("click", function () {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correctChoice) {
            score++;
            currentQuiz++;
        }
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
        }
    }
});