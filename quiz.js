// quiz.js

function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Compare the answers and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
