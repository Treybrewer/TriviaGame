
// ------------------user pushes key to start game----------------------------
var question1 = $(".card");
var question2 = $(".question2");
var question3 = $(".question3");
var question4 = $(".question4");
var question5 = $(".question5");
var questionArray = [question1, question2, question3, question4, question5];
var index = 0;
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
            $(questionArray[index]).hide();
            $(timerDiv).hide();
            $(".card-lose").show();
        };
        // ----------------------click functions----------------------------------
        // question1----------------------------
        $("#a-button1").click(function () {
            correctAnswer();
        });
        $("#b-button1, #c-button1, #d-button1").click(function () {
            wrongAnswer();
        });
        // --------------------------------------------------
        // question2-----------------------------------------
        $("#b-button2").click(function () {
            correctAnswer();
        });
        $("#a-button2, #c-button2, #d-button2").click(function () {
            wrongAnswer();
        });
        // ------------------------------------------------
        // question3--------------------------------------
        $("#d-button3").click(function () {
            correctAnswer();
        });
        $("#b-button3, #c-button3, #a-button3").click(function () {
            wrongAnswer();
        });
        // ---------------------------------------------------
        // question4-----------------------------------------
        $("#c-button4").click(function () {
            correctAnswer();
        });
        $("#b-button4, #a-button4, #d-button4").click(function () {
            wrongAnswer();
        });
        // -------------------------------------------------------
        // question5-----------------------------------------------
        $("#b-button5").click(function () {
            correctAnswer();
        });
        $("#a-button5, #c-button5, #d-button5").click(function () {
            wrongAnswer();
        });
        // --------------------------------------------------------
    };

};

function correctAnswer() {
    $(questionArray[index]).hide();
    $(".card-win").show();
    intervalId = setInterval(decrement, 1000);
    var timer = [3];
    function decrement() {
        timer -= 1;
        if (timer === 0) {
            $(".card-win").hide();
            index += 1;
            $(questionArray[index]).show();
            
        };
    };
    
};
function wrongAnswer() {
    $(questionArray[index]).hide();
    $(".card-wrong").show();
    intervalId = setInterval(decrement, 1000);
    var timer = [3];
    function decrement() {
        timer -= 1;
        if (timer === 0) {
            $(".card-wrong").hide();
            index += 1;
            $(questionArray[index]).show();
        };
    };
    index += 1;
};

function nextQuestion() {
    // need to create a function that will recongize the current question and be able to move to the next question after the timeout/wrong/win screen

    // need a variable to reconize current question
    var currentQuestion = [];
    var nextQuestion = [];


};

start();
