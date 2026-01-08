// Capturar los elementos del DOM usando data-attributes

const loginForm = document.getElementById('login-form');
const emailInput = document.querySelector('[data-js="email-input"]');
const passInput = document.querySelector('[data-js="password-input"]');
const emailError = document.querySelector('[data-js="email-error"]');
const passError = document.querySelector('[data-js="password-error"]');