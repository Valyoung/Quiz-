// const quiz = document.getElementById("");
// const start = document.getElementById("start");
// const quiz = document.getElementById("quiz");
// const question = document.getElementById("question");
// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");
// const counter = document.getElementById("counter");
// const timeGauge = document.getElementById("timeGauge");
// const scoreDiv = document.getElementById("scoreContainer");
//   //initials
// $("#submitInitials").on("click", function () {
//     console.log("user clicked submit initials for high scores");
//     $(".highScorePage").show();
//     quizQuestion.highScorePage();
// })

// $("#resetScores").on("click", function () {
//     console.log("user clicked reset high scores");
//     localStorage.clear();
//     $("#hsArray").hide();
// })

//Questions
let ques1 = {
    question: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
     answers:["document.getElement(“geek”).innerHTML=”I am a Geek”;"
      ,"document.getElementById(“geek”).innerHTML=”I am a Geek”;","document.getId(“geek”)=”I am a Geek”;"
    ,"document.getElementById(“geek”).innerHTML=I am a Geek;"],
    correct:0 //index is the correct answer
};

let ques2 = {
    question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
     answers: ["alertbox(“GeeksforGeeks”);", "msg(“GeeksforGeeks”);"
     , "msgbox(“GeeksforGeeks”);","alert(“GeeksforGeeks”);"],
     correct:3
};

let ques3 = {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "HyperLinks and Text Markup Language", "Home Tool Markup Language"],
    correct: 0
  };
  let ques4 = {
    question: "Javasctipt is the same as Java?",
    answers: ["True", "False"],
    correct: 1
  };
  var ques5 = {
    question: "Is JavaScript case-sensitive?",
    answers: ["True", "False"],
    correct: 0
  };

  let questions = [ques1, ques2, ques3, ques4, ques5];

  let anchors;
  let anchorsClass = '';
  let anchorId =[];
  let correctAnswers = 0;
  let quizPge = 1;

  let curtIndex = 0;
  let curtQues = questions[curtIndex];

  let prevQues;
  let prevIndex = 0;

  let ulAnchor = document.getElementsByTagName('ul')[0];
  let button = document.getElementById('submit');
  let questionName = document.getElementById('question');


let classHigh = 'selected';

  function displayQues (){
      if (curtIndex != 0){
          ulAnchor.innerHTML = '';
          button.innerHTML = 'submit';
          button.className = 'submit';
          button.id = 'submit';

          document.getElementById('quizNum').innerHTML = quizPge;
          }

     if (curtIndex == (questions.length)){
         ulAnchor.innerHTML = '';
         document.getElementById('question').innerHTML = '';

         displayQues();
         return
     }    
     
     questionName.innerHTML = curtQues.question;
     console.log(curtQues.question);

     for (let i =0; i < curtQues.answers.length; i++) {
         let newAns = document.createElement('li');
         newAns.id = 'ans'+ (i+1);
         newAns.className = "notSelected";
         let textAns = document.createTextNode(curtQues.answers[i]);
         newAns.appendChild(textAns);
         let addNew = document.getElementById('answer');
         addNew.appendChild(newAns);
         console.log(curtQues.answers[i]);
     }

     let $liTag = $('.notSelected').click(function(list) {
         list.preventDefault();
         $liTag.removeClass(classHigh);
         $(this).addClass(classHigh);

     for (let i = 0; i < curtQues.answers.length ; i++) {
         if($liTag[i].className == "notSelected selected"){
             tags = $liTag[i].id;
             console.log(tags);
             tagsClassName = $liTag[i];
         }

     }    

     });


     button.onclick = function (){ checkAns()};
    }
    displayQues();

    function checkAns (){
        let selectedItem = document.getElementById(tags);

        if (selectedItem == undefined) {
            alert("Please click on an answer!")
            return
        }else {
            let userAns = selectedItem.innerHTML;
        }

        if (userAns == curtQues.answers[curtQues.correct]) {
            selectedItem.className ='correct';

            correctAnswers++;
            console.log(correctAnswers);
        }else {
            console.log("Wrong! Should be: "+ curtQues.answers[curtQues.correct]);
            selectedItem.className = 'wrong';
            ulAnchor.getElementsByTagName('li')[curtQues.correct].className = 'correct';
            console.log(curtQues.answers[curtQues.correct]);
        }
        button.innerHTML = 'Next Question';
        button.className = 'next';
        button.id = 'next';

        prevQues = curtQues;
        quizPge++;
        curtIndex++;
        curtQues = question[curtIndex];


        button.onclick = function (){displayQues()};
    }

    function displayResults () {
        document.getElementById('pgs').innerHTML = '';

        questionName.innerHTML = '<h1> Your Score</h1>';

        let info = document.getElementById('quizResults');

        info.innerHTML = '';
        info.id = 'circle';
        info.className = 'circle';


        let newDiv = document.createElement('div');
        newDiv.className = 'fill';
        let addHere = document.getElementById('circle');
        addHere.appendChild(newDiv);

        let scoreNew = document.createElement('h3');
        scoreNew.className = 'score';
        let textScore = document.createTextNode(Math.floor((correctAnswers/questions.length)*100)+ '%');
        scoreNew.appendChild(textScore);
        addHere.appendChild(scoreNew);

        let score = $(". score").text();

        $(".fill").css("height", score);

        if (correctAnswers >= 5) {
            let newCong = document.createElement('p');
            let textCong = document.createTextNode('Great job!')
            newCong.appendChild(textCong);
            document.getElementById('disp').appendChild(newCong);

            cont();
        }
    }
  



//Questions from https://www.geeksforgeeks.org/javascript-quiz-set-1/
// Resouces site from  https://www.youtube.com/watch?v=49pYIMygIcU&t=1905s


    // },{
    //     question : "Choose the correct JavaScript syntax to change the content of the following HTML code.",
    //     ansarr: ["document.getElement(“geek”).innerHTML=”I am a Geek”;"
    //     ,"document.getElementById(“geek”).innerHTML=”I am a Geek”;","document.getId(“geek”)=”I am a Geek”;"
    //     ,"document.getElementById(“geek”).innerHTML=I am a Geek;"],
    //     answer:"document.getElementById(“geek”).innerHTML=”I am a Geek”;"
    // },{
    //     question : "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    //     ansarr: ["alertbox(“GeeksforGeeks”);", "msg(“GeeksforGeeks”);"
    //     , "msgbox(“GeeksforGeeks”);","alert(“GeeksforGeeks”);"],
    //     answer:"alert(“GeeksforGeeks”);"
    // }
// ];

// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// let count = 0;
// const questionTime = 10; // 10s
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
// let TIMER;
// let score = 0;






