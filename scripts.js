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
function chechValidateEmail(email) {
  const emailValue = email.value;
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(emailValue)) {
    showSuccess(email);
  } else {
    showError(email, "email is not valid.");
  }
  return String(emailValue).toLowerCase().match(re);
}

// First letter to Uppercase
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

// Check input length
function checkLength(input, min, max) {
  const inputId = input.id;
  const valueLength = input.value.length;
  if (valueLength < min) {
    showError(input, `${inputId} must be at least ${min} characters`);
  } else if (valueLength > max) {
    showError(input, `${inputId} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Check password match
function checkPasswordMatch(password, password2) {
  if (password.value !== password2.value) {
    showError(password2, "Password do not match");
  } else {
    showSuccess(password2);
  }
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 5, 15); // username, min, max
  checkLength(password, 7, 20); // password, min, max
  chechValidateEmail(email);
  checkPasswordMatch(password, password2);
});
