document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if(name && email && message) {
        document.getElementById("responseMessage").textContent = "Thank you for your feedback!";
        document.getElementById("feedbackForm").reset();
    } else {
        document.getElementById("responseMessage").textContent = "Please fill in all fields.";
    }
});
