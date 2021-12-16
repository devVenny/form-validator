"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value.length < 6) {
    username.parentNode.classList.add("error");
  } else {
    username.parentNode.classList.add("success");
  }

  if (email.value) {
    if (email.value.includes("@")) {
      email.parentNode.classList.add("success");
    } else {
      email.parentNode.classList.add("error");
    }
  }

  if (password.value) {
    if (isNaN(password.value) || password.value.length < 6) {
      password.parentNode.classList.add("error");
    } else {
      password.parentNode.classList.add("success");
    }
  }

  if (password2.value) {
    if (password.value !== password2.value) {
      password.parentNode.classList.toggle("error");
      password2.parentNode.classList.add("error");
    } else {
      password2.parentNode.classList.add("success");
    }
  }
});
