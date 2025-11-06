const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit",(e)=>{
   const elementos = document.querySelectorAll(".campoObligatorio") ;
   const mostrarError = document.querySelector(".mostrarError");

   for(let elemento of elementos){
       if(elemento.value===""){
           e.preventDefault();
           mostrarError.innerHTML="<p>Faltan llenar campos</p>";
       }
   }
});