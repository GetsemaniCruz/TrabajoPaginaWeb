const persona ={
    nombre: "Getse",
    edad: 19,
    pais: "Mexico"
};

//convertir objeto a un JSON(texto)
const personaJSON= JSON.stringify(persona);
console.log(personaJSON);

const  resultado= document.querySelector(".resultado");
resultado.textContent= personaJSON;