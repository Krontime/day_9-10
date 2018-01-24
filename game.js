let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");



function setAdditionGame() {
    $("#myForm").attr("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    $("#myForm").attr("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    $("#myForm").attr("data-gametype", "multiplication");
    multiplicationQuiz();
}

function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    // questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    $("questionbox").text("What is: " + num1 + " + " + num2 + "?");
    $("[name=rightAnswer]").val() = (num1 + num2);
}

function checkAnswer() {
    let gametype = $("#myForm").attr("data-gametype");
    if ($("[name=answer]").val() == $(["name=rightAnswer"]).val()) {
        // alert("Hey! You got it right!")
        $("body").append("<div class='message'><h1>'Hey! You got it right!'</h1></div>");
        $(".message").css("background-color", "green");
        $(".message").fadeIn(1000);
        $(".message").fadeOut(1000);
        $(".message").remove();
        score++
    } else {
        if (score >= 1) {
            // alert("Oh, Sorry! You got it wrong :(")
            $("body").append("<div class='message'><h1>'Oh, Sorry! You got it wrong :('</h1></div>");
            $(".message").css("background-color", "green");
            $(".message").fadeIn(1000);
            $(".message").fadeOut(1000);
            $(".message").remove();
            score--
        } else {
            $("body").append("<div class='message'><h1>'Oh, Sorry! You got it wrong :('</h1></div>");
            $(".message").css("background-color", "green");
            $(".message").fadeIn(1000);
            $(".message").fadeOut(1000);
            $(".message").remove();
        }
    }
    $("[name=answer]").val("");
    $("#score").text("score(score)");
    // scorebox.textContent = score;
    if (gametype == "addition") {
        additionQuiz()
    }
    if (gametype == "subtraction") {
        additionQuiz()
    }
    if (gametype == "multiplication") {
        additionQuiz()
    }
}

additionQuiz();



function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if (num2 > num1) {
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    // questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
    $("question").text("What is: " + num1 + " - " + num2 + "?");
    $("[name=rightAnswer]").val() = (num1 - num2);
}

function checkAnswer() {
    let gametype = $("#myform").attr("data-gametype");
    if ($("[name=answer]").val() == $(["name=rightAnswer"]).val()) {
        alert("Hey! You got it right!");
        score++
    } else {
        if (score >= 1) {
            alert("Oh, Sorry! You got it wrong :(");
            score--
        } else {
            alert("Oh, Sorry! You got it wrong :(");
        }
    }
    scorebox.textContent = score;
    if (gametype == "addition") {
        additionQuiz()
    } 
    if (gametype == "subtraction") {
        additionQuiz()
    }
    if (gametype == "multiplication") {
        additionQuiz()
    }
}

subtractionQuiz();



function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 12);
    let num2 = Math.floor(Math.random() * 12);
    // questionbox.textContent = "What is: " + num1 + " x " + num2 + "?";
    $("question").text("What is: " + num1 + " x " + num2 + "?")
    $("[name=rightAnswer]").val() = (num1 * num2);
}

function checkAnswer() {
    let gametype = $("#myForm").attr("data-gametype");
    if ($("[name=answer]").val() == $(["name=rightAnswer"]).val()) {
        alert("Hey! You got it right!");
        score++
    } else {
        if (score >= 1) {
            alert("Oh, Sorry! You got it wrong :(");
            score--
        } else {
            alert("Oh, Sorry! You got it wrong :(");
        }
    }
    scorebox.textContent = score;
    if (gametype == "addition") {
        additionQuiz()
    } 
    if (gametype == "subtraction") {
        additionQuiz()
    }
    if (gametype == "multiplication") {
        additionQuiz()
    }
}

multiplicationQuiz();