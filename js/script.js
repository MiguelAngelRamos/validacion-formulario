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

// los spans de errores
const emailError = document.querySelector('[data-js="email-error"]');
const passError = document.querySelector('[data-js="password-error"]');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores escritos en los inputs de correo y contraseña
  const emailValue = emailInput.value.trim();
  const passValue = passInput.value.trim();
 
  // validar email sofia@correo.com
  const isEmailInvalid = !VALIDATION_RULES.email.test(emailValue);
  console.log(isEmailInvalid);
  //* Si cumple con el formato de correo retorna true

  // validar password Academy123
  const isPassInvalid = !VALIDATION_RULES.password.test(passValue);
  console.log(isPassInvalid);
  //* Si cumple con el formato  de password retorna true

  // * Esta condición va ser verdadera siempre y cuando el email y el password sean validos

  if(!isEmailInvalid && !isPassInvalid) {
    alert('Validacion exitosa. Enviando al servidor....')
  }
  // if(isEmailInvalid && isPassInvalid) {
  //   alert('Validacion exitosa, Enviado datos al Servidor..')
  // } else {
  //   alert('Error en los datos no podemos enviar información al servidor')
  // }

  //  if(isEmailInvalid && isPassInvalid) {
  //   console.log('El email y la contraseña invalidos');
  //  } else if(isEmailInvalid) {
  //   console.log('Email invalido')
  //  } else if(isPassInvalid) {
  //   console.log('Contraseña invalida')
  //  } else {
  //   alert('Datos enviados al servidor');
  //  }

})
