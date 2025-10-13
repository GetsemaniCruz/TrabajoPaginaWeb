
//constante
const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const fecha = document.querySelector(".fecha");
const saludo = document.querySelector(".saludo");

//mostrar info de localStorage
const textoGuardado = localStorage.getItem("texto");
if(textoGuardado !=""){
    saludo.textContent = `Guardando: ${textoGuardado}`;

}

btnGuardar.addEventListener("click",()=>{
    const texto = nombre.value + " "+ apellido.value + " " + fecha.value;
    
    
    if(nombre!="" && apellido!="" && fecha!=""){
        localStorage.setItem("texto",texto);
        saludo.textContent = `Guardando: ${texto}`;
    }
});