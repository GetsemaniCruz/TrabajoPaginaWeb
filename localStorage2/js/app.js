const btnGuardar = document.querySelector(".btnGuardar");
const tarea = document.getElementById("tarea");
const checkboxCompletar = document.getElementById("completar");
const saludo = document.getElementById("saludo");

const textoGuardado = localStorage.getItem("texto");

if(textoGuardado !== null && textoGuardado.trim() !== ""){
    saludo.textContent = `Guardando: ${textoGuardado}`;
}

btnGuardar.addEventListener("click",()=>{

    const tarea2 = tarea.value.trim();
    const isCompleted = checkboxCompletar.checked;
    
    if(tarea2 !== ""){

        localStorage.setItem("texto", tarea2);
  
        saludo.textContent = `Guardando: ${tarea2}`;
        tarea.value = "";
        checkboxCompletar.checked = false;
    }
});
