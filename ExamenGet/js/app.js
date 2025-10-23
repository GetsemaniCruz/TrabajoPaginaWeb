const agregar = document.querySelector(".agregar"); 
const inputTitulo = document.getElementById("titulo");
const sectionTareas = document.querySelector(".tarea");
const saludo = "tarea";

const ultimoTituloGuardado = localStorage.getItem(saludo);

if (ultimoTituloGuardado !== null && ultimoTituloGuardado.trim() !== "") {
    sectionTareas.textContent = "Última tarea guardada: ${tituloTarea}";
} else {
    sectionTareas.textContent = 'No hay tareas guardadas.';
}

agregar.addEventListener("click", () => {
    const tituloDeLaTarea = inputTitulo.value.trim();

    if (tituloDeLaTarea != "") {
        localStorage.setItem(saludo, tarea);

        sectionTareas.textContent = "Última tarea guardada: ${titulo}";

        inputTitulo.value = "";
    } else {
        alert("Por favor, introduce un título para la tarea.");
    }
});