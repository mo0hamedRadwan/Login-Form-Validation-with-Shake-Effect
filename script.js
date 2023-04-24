const form = document.querySelector("form");
const eField = document.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = document.querySelector(".password");
const pInput = pField.querySelector("input");


form.onsubmit = (e) => {
    // Preventing form from Submitting
    e.preventDefault();
    if (eInput.value == "") {
        eField.classList.add("shake" , "error");
    } else {
        checkEmail();
    }

    if (pInput.value == "") {
        pField.classList.add("shake" , "error");
    }

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);
    
    eInput.onkeyup = () => {
        checkEmail();
    }

    pInput.onkeyup = () => {
        if (pInput.value == "") {
            pField.classList.add("error");
        } else {
            pField.classList.remove("error");
        }
    }

    if (!eField.classList.contains("error") &&
        !pField.classList.contains("error")) {
        window.location.href = "#";
        // window.URL = "";
        console.log("Welcome Page");
    }
}


function checkEmail() {
    // Pattern to validate Email
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // If Pattern not matched with user entered value
    if (!eInput.value.match(pattern)) {
        eField.classList.add("error");
        let errorTxt = eField.querySelector(".error-txt");
        if (eInput.value != "") {
            errorTxt.innerHTML = "Enter a valid Email";
        } else {
            errorTxt.innerHTML = "* Email required";
        }
    } else {
        eField.classList.remove("error");
    }
}