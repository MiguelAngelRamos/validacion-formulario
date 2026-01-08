// Capturar los elementos del DOM usando data-attributes y ID segun el caso

const VALIDATION_RULES = {
    // Valida: usuario @ dominio . extension (min 2 letras)
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    // Valida: Mínimo 8 caracteres, al menos una letra y un número
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
};

const loginForm = document.getElementById('login-form');
// const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('[data-js="email-input"]');
const passInput = document.querySelector('[data-js="password-input"]');

const emailError = document.querySelector('[data-js="email-error"]');
const passError = document.querySelector('[data-js="password-error"]');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores escritos en los inputs de correo y contraseña
  const emailValue = emailInput.value.trim();
  const passValue = passInput.value.trim();
 
  // validar email
  const isEmailInvalid = VALIDATION_RULES.email.test(emailValue);
  console.log(isEmailInvalid);

  // validar password
  const isPassInvalid = VALIDATION_RULES.password.test(passValue);
  console.log(isPassInvalid);

  // * Esta condición va ser verdadera siempre y cuando el email y el password sean validos
  /*
  if() {

  }
  */
})
