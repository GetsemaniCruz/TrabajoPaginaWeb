const correoInput = document.getElementById("correo");
const contraseniaInput = document.getElementById("contrasenia");
const resultadoDiv = document.getElementById("mostrarResultado");
const validarBoton = document.getElementById("validar");

function validarDatos() {

    const correoValor = correoInput.value.trim(); 
    const contraseniaValor = contraseniaInput.value.trim();


    if (correoValor === "" && contraseniaValor === "") {
        resultadoDiv.innerHTML = "<p>Por favor, ingresa un correo y una contraseña.</p>";
    } else if (correoValor === "") {
        resultadoDiv.innerHTML = "<p>Aún no has ingresado un correo.</p>";
    } else if (contraseniaValor === "") {
        resultadoDiv.innerHTML = "<p>Aún no has ingresado una contraseña.</p>";
    } else {
        resultadoDiv.innerHTML = "<p>Datos ingresados correctamente.</p>";
    }
}

if (validarBoton) {
    validarBoton.addEventListener("click", validarDatos);
}

