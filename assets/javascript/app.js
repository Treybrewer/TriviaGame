
// ------------------user pushes key to start game----------------------------
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
    $(".card").show();
    $(".card-start").hide();
    intervalId = setInterval(decrement, 1000);
    var timer = [10];
    function decrement() {
        timer -= 1;
        var timerDiv = $(".card-title").append("<div id=timerDiv" + "</div>")
        $(timerDiv).html("<h2>" + timer + "</h2>");
        // ------------------------time out conditional-----------------------------------
        if (timer === 0) {
            $(".card").hide();
            $(timerDiv).hide();
            $(".card-lose").show();
        };
        // ----------------------click functions----------------------------------
        $("#a-button1").click(function () {
            correctAnswer();
        });
        $("#b-button1, #c-button1, #d-button1").click(function () {
            wrongAnswer();
        });
    };

};

function correctAnswer() {
    $(".card").hide();
    $(".card-win").show();
    intervalId = setInterval(decrement, 1000);
    var timer = [3];
    function decrement() {
        timer -= 1;
        if (timer === 0) {
            $(".card-win").hide();
            $(".question2").show();
        };
    };
};
function wrongAnswer() {
    $(".card").hide();
    $(".card-wrong").show();
    intervalId = setInterval(decrement, 1000);
    var timer = [3];
    function decrement() {
        timer -= 1;
        if (timer === 0) {
            $(".card-wrong").hide();
            $(".question2").show();
        };
    };
};

start();
