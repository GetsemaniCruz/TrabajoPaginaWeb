const formulario = document.querySelector(".formulario");
const campos = document.querySelectorAll(".campoObligatorio");

campos.forEach(campo => {
    campo.addEventListener("keydown", validarCampo);
    campo.addEventListener("keyup", validarCampo);
});

function validarCampo(e) {
    const campo = e.target;
    if (campo.value === "") {
        campo.classList.remove("valido");
        campo.classList.add("invalido");
    } else {
        campo.classList.remove("invalido");
        campo.classList.add("valido");
    }
}

formulario.addEventListener("submit", (e) => {
    const elementos = document.querySelectorAll(".campoObligatorio");
    const mostrarError = document.querySelector(".mostrarError");
    let incompleto = false;

    for (let elemento of elementos) {
        if (elemento.value === "") {
            elemento.classList.remove("valido");
            elemento.classList.add("invalido");
            incompleto = true;
        }
    }

    if (incompleto) {
        e.preventDefault();
        mostrarError.innerHTML = "<p>Faltan llenar campos</p>";
    } else {
        mostrarError.innerHTML = "";
    }
});