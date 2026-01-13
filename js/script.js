// Capturar los elementos del DOM usando data-attributes y ID segun el caso

const VALIDATION_RULES = {
    // Valida: usuario @ dominio . extension (min 2 letras)
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    // Valida: Mínimo 8 caracteres, al menos una letra y un número
    // secreto123
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
};


const loginForm = document.getElementById('login-form');
// const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('[data-js="email-input"]');
const passInput = document.querySelector('[data-js="password-input"]');

// los spans de errores
const emailErrorSpan = document.querySelector('[data-js="email-error"]');
const passErrorSpan = document.querySelector('[data-js="password-error"]');

// Funcion para mostrar u ocultar errores (Reutilizable)

const toggleError = (input, errorElementSpan, message, isInvalid) => {
  // errorElementSpan.textContent nos permite escribir dentro del span
  // si isInvalid es true mostramos el mensaje, si no lo es, mostramos una cadena vacia
  // si es true isInvalid entonces el span queda asi <span class="error-msg" data-js="email-error">Por favor ingresa un correo válido</span>
  // si es false isInvalid entonces el span queda asi <span class="error-msg" data-js="email-error"></span>
  errorElementSpan.textContent = isInvalid ? message: '';
  isInvalid ? input.classList.add('invalid') : input.classList.remove('invalid');
}



loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores escritos en los inputs de correo y contraseña
  const emailValue = emailInput.value.trim();
  const passValue = passInput.value.trim();
 
  //* StartEmail
  // validar email sofia@correo.com  si pasamos a VALIDATION_RULES.email.test(emailValue); nos retorna true
  const isEmailInvalid = !VALIDATION_RULES.email.test(emailValue);

  // emailInput es <input type="email" id="email" data-js="email-input" placeholder="ejemplo@correo.com">
  // emailErrorSpan es <span class="error-msg" data-js="email-error"></span>
  // isEmailInvalid es true o false dependiendo del resultado de la expresion regular y la negacion final, recordar que cuando sea totalmente valido VALIDATION_RULES.email.test(emailValue); retorna true, pero al negarlo con ! se vuelve false


  toggleError(emailInput, emailErrorSpan, 'Por favor ingresa un correo válido', isEmailInvalid);
  //* EndEmail

  //* StartPassword
  // validar password Academy123
  const isPassInvalid = !VALIDATION_RULES.password.test(passValue);
  console.log(isPassInvalid);
  toggleError(passInput, passErrorSpan, 'Por favor ingresa una contraseña válida', isPassInvalid);
  //* End Password


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
