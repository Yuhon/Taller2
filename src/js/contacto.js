import "../css/style.css";
import "flowbite";

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("username");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono"); // agregado
const cedula = document.getElementById("cedula"); // agregado
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// patrones
const patrones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,16}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  passw: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  telefono: /^\d{10}$/,
  cedula: /^\d{10}$/,
};

// mostrar error
const mostrarError = (input, idError) => {
  const mensajeError = document.getElementById(idError);
  if (mensajeError) mensajeError.classList.remove("hidden");
  input.classList.add("border-red-500");
  input.classList.remove("border-slate-700");
};

// ocultar error
const eliminarError = (input, idError) => {
  const mensajeError = document.getElementById(idError);
  if (mensajeError) mensajeError.classList.add("hidden");
  input.classList.remove("border-red-500");
  input.classList.add("border-slate-700");
};

// validación
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let formularioValido = true;

  // NOMBRE
  if (!patrones.nombre.test(nombre.value)) {
    mostrarError(nombre, "error-username");
    formularioValido = false;
  } else {
    eliminarError(nombre, "error-username");
  }

  // EMAIL
  if (!patrones.email.test(email.value)) {
    mostrarError(email, "error-email");
    formularioValido = false;
  } else {
    eliminarError(email, "error-email");
  }

  // TELÉFONO
  if (!patrones.telefono.test(telefono.value)) {
    mostrarError(telefono, "error-telefono");
    formularioValido = false;
  } else {
    eliminarError(telefono, "error-telefono");
  }

  // CÉDULA
  if (!patrones.cedula.test(cedula.value)) {
    mostrarError(cedula, "error-cedula");
    formularioValido = false;
  } else {
    eliminarError(cedula, "error-cedula");
  }

  // PASSWORD
  if (!patrones.passw.test(password.value)) {
    mostrarError(password, "error-password");
    formularioValido = false;
  } else {
    eliminarError(password, "error-password");
  }

  // CONFIRMAR PASSWORD
  if (
    confirmPassword.value !== password.value ||
    confirmPassword.value === ""
  ) {
    mostrarError(confirmPassword, "error-confirmPassword");
    formularioValido = false;
  } else {
    eliminarError(confirmPassword, "error-confirmPassword");
  }

  if (formularioValido) {
    alert("Registro exitoso");
  }
});
