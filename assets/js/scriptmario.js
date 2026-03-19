const miheader = document.getElementById("header");
const boton = document.getElementById("#botonsaludo");
const inputnombre = document.getElementById("nombreusuario");
const textodestino = document.getElementById("mensajedesaludo");

const contador = document.getElementById("numerito");
const cuentaclick = document.getElementById("cuentaclick");

cuentaclick.addEventListener("click", () => {
  contador.innerText = Number(contador.textContent) + 1;
});
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const naranja = document.getElementById("naranja");
const cuerpo = document.getElementById("cuerpo");
const blanco = document.getElementById("blanco");

rojo.addEventListener("click", () => {
  cuerpo.style.backgroundColor = "red";
});

verde.addEventListener("click", () => {
  cuerpo.style.backgroundColor = "green";
});

naranja.addEventListener("click", () => {
  cuerpo.style.backgroundColor = "orange";
});

blanco.addEventListener("click", () => {
  cuerpo.style.backgroundColor = "white";
});

const carlos = document.getElementById("carlos");
const botoncr = document.getElementById("botoncr");
const botoncr2 = document.getElementById("botoncr2")
botoncr.addEventListener("click", () =>{
carlos.style.display= "none"
})

botoncr2.addEventListener("click", ()=> {
carlos.style.display=""

})