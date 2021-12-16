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

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "email is required");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "password2 is required");
  } else {
    showSuccess(password2);
  }
});
