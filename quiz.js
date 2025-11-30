document.addEventListener("DOMContentLoaded", function () {

    // Select the submit button
    const submitBtn = document.getElementById("submit-answer");

    // Select the feedback paragraph
    const feedback = document.getElementById("feedback");

    // Create the checkAnswer function
    function checkAnswer() {

        // Retrieve the selected radio option
        const selectedChoice = document.querySelector("input[name='quiz']:checked");

        // If no option is selected
        if (!selectedChoice) {
            feedback.textContent = "Please select an answer.";
            return;
        }

        // Check if the selected answer is correct
        if (selectedChoice.value === "4") {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }
    }

    // Add event listener to the button
    submitBtn.addEventListener("click", checkAnswer);

});

