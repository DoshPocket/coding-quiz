//variables defined
let container = document.querySelector(".container");
let timer = document.querySelector("#timer");
let score = document.querySelector(".score");
let playButton = document.querySelector("#play-button");
let highscoreButton = document.querySelector("#highscore-button");
let form = document.querySelector(".form");
let questionContainer = document.querySelector("#questions-container");
let questionEl = document.querySelector("#questions");
let scoreboard = document.querySelector("#scoreboard");
let splash = document.querySelector(".splash-screen");
let answers = document.querySelector(".answers");
let userName = document.querySelector("#user-name");
let initials = document.querySelector("#initials");
let userScores = document.querySelector("#user-scores");

//quiz questions and answers
let quizContent = [ 
    {
    question: "Which of the following is NOT a primitive type?",
    choices: [ 
        "Number",
        "String",
        "Hooligan",
        "Symbol"
        ],
        answer: "Hooligan"
    },
    {
        question: "What does DOM stand for?",
        choices: [ 
            "Dope Optics Man",
            "Document Object Model",
            "Debut Objection Mode",
            "Double Operation Model"
            ],
        answer: "Document Object Model"
        },
        {
            question: "What method attaches an event handler to a specified element?",
            choices: [ 
                "innerHTML",
                "eventHorizon",
                "getElementById",
                "addEventListener"
                ],
            answer: "addEventListener"
            },
            {
                question: "What is the difference between 'getElementById' and 'querySelector'?",
                choices: [ 
                    "'getElementById' takes longer to return",
                    "'querySelector' can grab either class or id",
                    "'getElementById' is not Javascript",
                    "'querySelector' only selects questions"
                    ],
                answer: "'querySelector' can grab either class or id"
                },
                {
                    question: "What stops the browser from doing what is would naturally do?",
                    choices: [ 
                        "event.preventDefault()",
                        "event.stopItBrowser()",
                        "event.nurture()",
                        "event.distractBrowser()"
                        ],
                    answer: "event.preventDefault()"
                    }
    ]

let secondsLeft = 60;

//starts quiz upon clicking PLAY button and starts 60 second timer
playButton.addEventListener('click', setTime);
    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = secondsLeft;
      
          if(secondsLeft <= 0) {
            clearInterval(timerInterval);
          }
      
        }, 1000);

    hide(splash)
    show(questionContainer)
    displayQuiz()
    }
    //hide element
    function hide(element) {
        element.setAttribute("style", "display: none;");
    }
    //show element
    function show(element) {
        element.setAttribute("style", "display: block;");
    }
    let quizIndex=0
    //display question and listen for answer
    function displayQuiz(event) {
        currentQuestion=quizContent[quizIndex];
        questionEl.textContent=currentQuestion.question;

        let currentAnswers=currentQuestion.choices;
        for (let i=0; i < currentAnswers.length; i++){
            answers.children[i].textContent=currentAnswers[i];
            answers.children[i].addEventListener('click', nextQuestion);
        }
    
    }
    //awards or deducts time based on answer
    function nextQuestion(event){ 
        if (event.target.textContent === quizContent[quizIndex].answer){
            secondsLeft+=5;
        } else {
            secondsLeft-=10;
        }

        if (quizIndex < quizContent.length-1){ 
            quizIndex++; 
            displayQuiz();
        } else {
            endQuiz();
        }
    }
    //savees player score to local storage
    function endQuiz(){
        let userName = document.querySelector("#user-name");
        console.log(userName)
        hide(questionContainer);
        score.textContent = secondsLeft;
        show(initials);
        initials.addEventListener('click', saveUserName);
        localStorage.setItem("score", score.textContent);
        localStorage.getItem("score");
        localStorage.setItem("userName", userName.textContent);
        console.log(userName.textContent)
    }
    //saves player name to local stoage
    function saveUserName(){
        let userName = document.querySelector("#user-name");

        localStorage.setItem("userName", userName.value);
        console.log(userName.value);
    }
    highscoreButton.addEventListener('click', function() {
        hide(splash);
        displayScoreboard();
      });
    //retrieves and displays player name and score
    function displayScoreboard(){
            document.querySelector("#player-name").innerHTML = localStorage.userName;
            document.querySelector("#user-scores").innerHTML = localStorage.score;
            console.log(localStorage.userName);
            show(scoreboard);
    }


