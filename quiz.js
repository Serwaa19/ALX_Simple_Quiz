function checkAnswer() {
    var correctAnswer = "4";
    var selectedRadio = document.querySelector('input[name="quiz"]:checked');
    var userAnswer = selectedRadio ? selectedRadio.value : null;
    
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);