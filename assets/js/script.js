let container = document.querySelector(".container");
let timer = document.querySelector("#timer");
let score = document.querySelector(".score");
let playButton = document.querySelector("#play-button");
let highscoreButton = document.querySelector("#highscore-button");
let form = document.querySelector(".form");
let questionContainer = document.querySelector("#questions-container");
let questionEl = document.querySelector("#questions");
let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let question5 = document.querySelector("#question-5");
let scoreboard = document.querySelector("#scoreboard");
let splash = document.querySelector(".splash-screen");
let answers = document.querySelector(".answers");

let quizContent = [ 
    {
    question: "What is a window object?",
    choices: [ 
        "My window that I open to get fresh air",
        "My operating system",
        "My Internet Explorer window",
        "Where my document object is placed"
        ],
    answer: 3
    },
    {
        question: "What is a window object?",
        choices: [ 
            "My window that I open to get fresh air",
            "My operating system",
            "My Internet Explorer window",
            "Where my document object is placed"
            ],
        answer: 3
        }
    ]


var secondsLeft = 60;

playButton.addEventListener('click', setTime);
    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
          }
      
        }, 1000);
    hide(splash)
    show(questionContainer)
    displayQuiz()
    }

    function hide(element) {
        element.setAttribute("style", "display: none;");
    }
    //show element
    function show(element) {
        element.setAttribute("style", "display: block;");
    }
    let quizIndex=0

    function displayQuiz() {
        currentQuestion=quizContent[quizIndex];
        questionEl.textContent=currentQuestion.question;
        
        let currentAnswers=currentQuestion.choices;
        for (let i=0; i < currentAnswers.length; i++){
            answers.children[i].textContent=currentAnswers[i];
            console.log(currentAnswers)
            console.log(quizContent.choices)
        }

    }



//   highscoreButton.addEventListener('click', function() {
//     score;
//   });

