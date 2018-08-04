
// global variables---------------------------------------------------------
var question1 = $(".card");
var question2 = $(".question2");
var question3 = $(".question3");
var question4 = $(".question4");
var question5 = $(".question5");
var questionArray = [question1, question2, question3, question4, question5];
var index = 0;
var wrongArray = [0];
var correctArray = [0];
var keyArray = [];
// ---------------------------------------------------------------------------------
function start() {
    index = 0;
    wrongArray = [0];
    correctArray = [0];
    $(".card-start").show();
    // ------------------user pushes key to start game----------------------------
    $(document).keyup(function () {
       
        keyArray.push(event.key);
        // ----------------prevents game from breaking if multiple keys are pressed--------------------------------
        if (keyArray.length > 0) {
            $(document).unbind("keyup");
            questions();
        };
    });    
};

function questions() {
    // ------------shows question and begins timer-------------------------
    $(questionArray[index]).show();
    $(".card-start").hide();
    console.log(keyArray);
    var intervalId;
    intervalId = setInterval(decrement, 1000);
    var timer = [];
    timer = 15;
    function decrement() {
        if (timer < 1) {
            $(timerDiv).hide();
            timeout();
        };
        timer -= 1;
        var timerDiv = $(".card-title").append("<div id=timerDiv" + "</div>")
        $(timerDiv).html("<h2>" + timer + "</h2>");
        // ------------------------time out conditional-----------------------------------
        
        $(".btn").click(function () {
            if (index === 0) {
            };
            timer = 18;
        });
    };
    
};


function timeout() {
    if (index === 5) {
        return;
    };
    
    $(questionArray[index]).hide();
    $(".card-lose").show();
};
// ----------------------click functions----------------------------------
// question1----------------------------
$("#a-button1").click(function () {
    correctAnswer();
    correctArray++;
});
$("#b-button1, #c-button1, #d-button1").click(function () {
    wrongAnswer();
    wrongArray++;
});
// --------------------------------------------------
// question2-----------------------------------------
$("#b-button2").click(function () {
    correctAnswer();
    correctArray++;
});
$("#a-button2, #c-button2, #d-button2").click(function () {
    wrongAnswer();
    wrongArray++;
});
// ------------------------------------------------
// question3--------------------------------------
$("#d-button3").click(function () {
    correctAnswer();
    correctArray++;
});
$("#b-button3, #c-button3, #a-button3").click(function () {
    wrongAnswer();
    wrongArray++;
});
// ---------------------------------------------------
// question4-----------------------------------------
$("#c-button4").click(function () {
    correctAnswer();
    correctArray++;
});
$("#b-button4, #a-button4, #d-button4").click(function () {
    wrongAnswer();
    wrongArray++;
});
// -------------------------------------------------------
// question5-----------------------------------------------
$("#b-button5").click(function () {
    correctArray++;
    var calc = wrongArray * 20;
    var score = 100 - calc;
    var outcome = score;
    $(".scoreArea").text(outcome + "%");
    $(".correctArea").text(correctArray);
    $(questionArray[index]).hide();
    index++;
    $(".card-final").show();
    $(".loseArea").text(wrongArray);
    
});
$("#a-button5, #c-button5, #d-button5").click(function () {
    wrongArray++;
    var calc = wrongArray * 20;
    var score = 100 - calc;
    var outcome = score;
    $(".scoreArea").text(outcome + "%");
    $(".correctArea").text(correctArray);
    $(".loseArea").text(wrongArray);
    $(questionArray[index]).hide();
    index++;
    $(".card-wrong").hide();
    $(".card-final").show();
   
});
// ---------------------------------------------------------------
// refresh button ------------------------------------------------
$(".refresh").click(function () {
    index = 0;
    wrongArray = [0];
    correctArray = [0];
    $(".card-final").hide();
    //  
    start();
});
// ==============================================================

    // --------------------------------------------------------
function correctAnswer() {
    $(questionArray[index]).hide();
    $(".card-win").show();
    $(".card-wrong").hide();
    index += 1;
    intervalId2 = setInterval(decrement2, 1000);
    var timer5 = [3];
    function decrement2() {
        timer5 -= 1;
        if (timer5 === 0) {
            clearInterval(intervalId2);
            nextQuestion();
        };
        if (index === 5) {
            return;
        };
        if (index === 0) {
            return;
        };
    };
};
function nextQuestion() {
    $(".card-win").hide();
    $(".card-wrong").hide();
    $(questionArray[index]).show();
    questions();
};
function wrongAnswer() {
    $(questionArray[index]).hide();
    $(".card-wrong").show();
    $(".card-win").hide();
    index += 1;
    intervalId3 = setInterval(decrement3, 1000);
    var timer4 = [3];
    function decrement3() {
        timer4 -= 1;
        if (timer4 === 0) {
            clearInterval(intervalId3);
            nextQuestion();
        };
        if (index === 5) {
            $(".card-wrong").hide();
        };
    };

};
start();
