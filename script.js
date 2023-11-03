document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendButton");
    const clearButton = document.getElementById("clearButton");
    const validationForm = document.getElementById("validationForm");

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    sendButton.addEventListener("click", function () {
        if (validationForm.checkValidity()) {
            const email = document.getElementById("email").value;

            if (validateEmail(email)) {
                alert("Your answers sent");

                validationForm.reset();
            } else {
                alert("Please enter a valid email address.");
            }
        } else {
            alert("Please fill out all required fields with appropriate data.");
        }
    });

    sendButton.addEventListener("mouseover", function () {
        sendButton.style.backgroundColor = "lightblue";
    });

    sendButton.addEventListener("mouseout", function () {
        sendButton.style.backgroundColor = "";
    });

    clearButton.addEventListener("click", function () {
        validationForm.reset();
    });

    clearButton.addEventListener("mouseover", function () {
        clearButton.style.backgroundColor = "lightcoral";
    });

    clearButton.addEventListener("mouseout", function () {
        clearButton.style.backgroundColor = "";
    });
});


