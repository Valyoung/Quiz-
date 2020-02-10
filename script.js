const quiz = document.getElementById("");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");
  //initials
$("#submitInitials").on("click", function () {
    console.log("user clicked submit initials for high scores");
    $(".highScorePage").show();
    quizQuestion.highScorePage();
})

$("#resetScores").on("click", function () {
    console.log("user clicked reset high scores");
    localStorage.clear();
    $("#hsArray").hide();
})




//Questions from https://www.geeksforgeeks.org/javascript-quiz-set-1/

let questions = [
    {
        question : " What is the HTML tag under which one can write the JavaScript code?",
        ansarr: ["<javascript>", "<scripted>", "<script>", "<js>"],
        answer:"<script>"
    },{
        question : "Choose the correct JavaScript syntax to change the content of the following HTML code.",
        ansarr: ["document.getElement(“geek”).innerHTML=”I am a Geek”;"
        ,"document.getElementById(“geek”).innerHTML=”I am a Geek”;","document.getId(“geek”)=”I am a Geek”;"
        ,"document.getElementById(“geek”).innerHTML=I am a Geek;"],
        answer:"document.getElementById(“geek”).innerHTML=”I am a Geek”;"
    },{
        question : "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        ansarr: ["alertbox(“GeeksforGeeks”);", "msg(“GeeksforGeeks”);"
        , "msgbox(“GeeksforGeeks”);","alert(“GeeksforGeeks”);"],
        answer:"alert(“GeeksforGeeks”);"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;






