function cargarDatos(){
    const contenido = document.querySelector(".contenido");
    contenido.innerHTML=`<p>Nombre:${datos.nombre}</p>
                        <p>Apellido:${datos.apellido}</p>
                        <p>Correo:${datos.correo}</p>`;
}
//leer JSON
fetch("js/datos.json")
.then(respuesta => respuesta.json())//convertir objeto a JSON   
.then(datos => cargarDatos(datos))//mostrar los datos
.catch(error => console.error("Error al cargar el JSON",error));
