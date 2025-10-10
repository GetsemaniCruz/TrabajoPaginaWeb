let enviar = document.getElementById("enviar");

function validarFormulario() {
  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let fecha = document.getElementById("fecha").value;
  let generoSeleccionado = document.querySelector('input[name="genero"]:checked');
  let terminos = document.getElementById("terminos").checked;
  let mensaje = document.getElementById("mensaje");

  if (nombre === "" || apellido === "" || fecha === "" || !generoSeleccionado || !terminos) {
    mensaje.innerHTML = "<p>Por favor, completa todos los campos.</p>";
    console.log("Formulario incompleto");
  } else {
    mensaje.innerHTML = "<p>Formulario enviado correctamente.</p>";
    console.log("Formulario válido");
  }
}

enviar.addEventListener("click", validarFormulario);
