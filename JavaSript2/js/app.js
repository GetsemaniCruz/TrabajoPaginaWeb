let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
function realizarSuma(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado= numero1+numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es "+ resultado+"</p>";
    console.log("el resultado es "+resultado);
}
function realizarResta(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado= numero1-numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es "+ resultado+"</p>";
    console.log("el resultado es "+resultado);
}
function realizarMultiplicacion(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado= numero1*numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es "+ resultado+"</p>";
    console.log("el resultado es "+resultado);
}
function realizarDivision(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado= numero1/numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es "+ resultado+"</p>";
    console.log("el resultado es "+resultado);
}

sumar.addEventListener("click",realizarSuma);
restar.addEventListener("click",realizarResta);
multiplicar.addEventListener("click",realizarMultiplicacion);
dividir.addEventListener("click",realizarDivision);