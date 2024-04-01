// Variables globales
const botondeposito = document.querySelector("#depositos");
const modal = document.querySelector("#modal");
const botonSaldos= document.querySelector("#saldo");
const cerrarModalSaldos = document.querySelector("#modal button");
console.log
let userData = {};

document.addEventListener("DOMContentLoaded", function(){
    //DOMContentLoaded es una función del sitio web que avisa en cuanto ya se cargron todos los elementos
    console.log("Ya cargo");

    const correctUserString = sessionStorage.getItem("correctUser");
    const correctUser = JSON.parse(correctUserString);

    // rutas protegidas
    if (!correctUser) window.location.href = "/index.html";

    userData = correctUser;

    //buscamos donde esta el saludo
    const saludoTag = document.querySelector("#saludo_usuario");
    //cambiamos el html del tag de saludo a un nuevo elemento html
    saludoTag.outerHTML = `<h1 id="saludo_usuario">Bienvenido ${correctUser.nombre}</h1>`;
    console.log({ correctUser });
})

botondeposito.addEventListener("click", function(){
    alert("botonazo depositos");
    console.log(userData);
    window.location.href = "/pantalla.html";
})

function conmutarClase (elementohtml, clase){
    elementohtml.classList.toogle(clase);
} 

toggleModal = (elementohtml) => modal.classList.toggle("showModal");

botonSaldos.addEventListener("click", function(){
    //modal.style = "display: block";
    conmutarClase(modal, "closeModal");
});