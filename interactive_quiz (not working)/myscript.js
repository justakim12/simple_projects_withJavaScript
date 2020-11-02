var questions = [{
    question: "What datasources can Tableau link to?",
    choices: ["Hive", "Excel", "MongoDB", "All of the above"],
    correctAnswer: 3
}, {
    question: "What kind of graphs do Tableau support?",
    choices: ["Bar graph", "Line graph", "Bubble graph", "All of the above"],
    correctAnswer: 3
}, {
    question: "Is Tableau free?",
    choices: ["Yes", "No"],
    correctAnswer: 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function() {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function() {
        if(!quizOver) {
            value = $("input[type='ratio]:checked").val();
            if (value == undefined) {
                $(document).find('.quizMessage').text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers ++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    console.log("In display current question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set questionClass to current question
    $(questionClass).text(question);

    // Remove current <li> elements
    $(choiseList).find("li").remove();

    var choice;
    for (i=0; i< numChoices; i++) {
        choice = questionss[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + 'name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored:" + correctAnswers + "out of:" + questions.length);
    $(document).find(".quizContainer > .result" ).show()
}

function hideScore() {
    $(document).find(".result").hide();
}