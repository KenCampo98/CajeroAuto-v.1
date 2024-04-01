let userData = {};
const form = document.querySelector("#form_deposito")

document.addEventListener("DOMContentLoaded", function(){
    //DOMContentLoaded es una función del sitio web que avisa en cuanto ya se cargron todos los elementos

    const correctUserString = sessionStorage.getItem("correctUser");
    const correctUser = JSON.parse(correctUserString);

    userData = correctUser;
    console.log(userData);
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    const dataForm = new FormData(form); //clase => metodos y propiedades
    // destructurar
    const { cantidad_deposito } = Object.fromEntries(dataForm);
    console.log(cantidad_deposito);
    userData.saldo = Number(userData.saldo) + Number(cantidad_deposito);
    sessionStorage.setItem("correctUser", JSON.stringify(userData));
    window.location.href = "./atm.html";
    console.log(userData);
});