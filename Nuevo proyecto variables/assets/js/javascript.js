//TESTING JS//
console.log("fulanito")
//EJERCICIO PREVIO//
let nombre="Mario"
const text=document.getElementById("palabra")

let nombrecito=document.getElementById("nombre")
nombrecito.textContent=nombre
text.addEventListener("input",()=>{

    nombrecito.textContent=text.value+nombre
})
//EJERCICIO1//
const texto=document.getElementById("ex1")
const text2=document.getElementById("bienvenido al codigo!")
let ejerciciouno=document.getElementById("ejerciciouno")

texto.addEventListener("input",() => {

    ejerciciouno.textContent="hola "+ texto.value+" bienvenido"
})
/////////////////////////////////////
    console.log("hola")