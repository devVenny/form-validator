"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Error
function showError(input, message) {
  const formControl = input.parentNode;
  formControl.classList.add("error");
  const small = formControl.querySelector(".small");
  small.innerText = message;
}

// Show Success
function showSuccess(input) {
  const formControl = input.parentNode;
  formControl.classList.add("success");
}

// Email is valid
function isValidEmail(emailValue) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return String(emailValue).toLowerCase().match(re);
}

function getFieldName(inputId) {
  return inputId.charAt(0).toUpperCase() + inputId.slice(1);
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input.id)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
