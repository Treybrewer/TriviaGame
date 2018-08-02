
// ------------------user pushes key to start game----------------------------
var question1 = $(".card");
var question2 = $(".question2");
var question3 = $(".question3");
var question4 = $(".question4");
var question5 = $(".question5");
var questionArray = [question1, question2, question3, question4, question5];
var index = 0;
var wrongArray = [0];
var correctArray = [0];
function start() {
    $(".card-start").show();
    $(document).keyup(function () {


        questions();
    });
};
// ----------------prevents game from breaking if multiple keys are pressed--------------------------------
function questions() {
    var keyArray = [];
    keyArray.push(event.key);
    console.log(keyArray);
    if (keyArray.length > 0) {
        $(document).unbind("keyup");
    }
    // ------------shows question and begins timer-------------------------
    $(questionArray[index]).show();
    $(".card-start").hide();
    intervalId = setInterval(decrement, 1000);
    var timer = [];
    timer = 15;

    function decrement() {
        timer -= 1;
        var timerDiv = $(".card-title").append("<div id=timerDiv" + "</div>")
        $(timerDiv).html("<h2>" + timer + "</h2>");
        // ------------------------time out conditional-----------------------------------
        if (timer === 0) {
            timeout();
            $(timerDiv).hide();
        };
        $(".btn").click(function() {
            timer = 18;
        });
    };
    function timeout() {
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
        correctAnswer();
        correctArray++;
        $(".card-final").show();
    });
    $("#a-button5, #c-button5, #d-button5").click(function () {
        wrongAnswer();
        wrongArray ++;
        $(".card-final").show();
    });
    
   
    // --------------------------------------------------------
};
console.log("correctArray" + correctArray);
console.log("wrongArray" + wrongArray);
function correctAnswer() {
    $(questionArray[index]).hide();
    $(".card-win").show();
    $(".card-wrong").hide();
    intervalId2 = setInterval(decrement2, 1000);
    var timer = [3];
    function decrement2() {
        timer -= 1;
        if (timer === 0) {
            nextQuestion();
        };
    };
};
function nextQuestion() {
    $(".card-win").hide();
    index += 1;
    $(questionArray[index]).show();
};
function wrongAnswer() {
    $(questionArray[index]).hide();
    $(".card-wrong").show();
    $(".card-win").hide();
    intervalId3 = setInterval(decrement3, 1000);
    var timer4 = [3];
    function decrement3() {
        timer4 -= 1;
        if (timer4 === 0) {
            nextQuestion();
        };
    };

};


start();
