document.addEventListener("DOMContentLoaded", function () {

    // Retrieve the "submit-answer" button
    const submitBtn = document.getElementById("submit-answer");

    // Retrieve the feedback paragraph
    const feedback = document.getElementById("feedback");

    // Create the checkAnswer function
    function checkAnswer() {
        
        // Retrieve the user's selected answer
        const selectedChoice = document.querySelector("input[name='quiz']:checked");

        // Correct answer
        const correctAnswer = "4";

        // If no option is selected
        if (!selectedChoice) {
            feedback.textContent = "Please select an answer.";
            feedback.style.color = "red";
            return;
        }

        // Compare user's answer with correct answer
        if (selectedChoice.value === correctAnswer) {
            // Feedback for correct answer
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            // Feedback for incorrect answer
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }
    }

    // Add event listener to the button
    submitBtn.addEventListener("click", checkAnswer);

});
