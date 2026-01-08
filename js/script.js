// Capturar los elementos del DOM usando data-attributes

const loginForm = document.getElementById('login-form');

const emailInput = document.querySelector('[data-js="email-input"]');
const passInput = document.querySelector('[data-js="password-input"]');

const emailError = document.querySelector('[data-js="email-error"]');
const passError = document.querySelector('[data-js="password-error"]');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores escritos en los inputs de correo y contraseña
  const emailValue = emailInput.value.trim();
  const passValue = passInput.value.trim();
  console.log(`El valor que escribio el usuario en correo es: ${emailValue}`);
  console.log(`El valor que escribio el usuario en password es: ${passValue}`);
})