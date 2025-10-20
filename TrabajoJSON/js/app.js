const persona ={
    nombre: "Getse",
    edad: 19,
    pais: "Mexico",
    hobbies: ["Jugar mobile legends, escuchar musica, jugar con mi gato"]
};

//convertir objeto a un JSON(texto)
const personaJSON= JSON.stringify(persona);
console.log(personaJSON);

const  resultado= document.querySelector(".resultado");
resultado.textContent= personaJSON;

resultado.innerHTML = "Nombre "+ persona.nombre + 
"<p>Edad: "+ persona.edad+
"<p>Pais: "+ persona.pais+
"<p>Hobbies: "+ persona.hobbies