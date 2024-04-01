console.log("Hola Mundo!");

// => Crear nuestra base de datos
const banco = [
    {
        nombre: "Carlos",
        cuenta: 123456,
        password: "123",
        saldo: "100",
        currency: "MXN"
    }, // index 0
    {
        nombre: "Fernando",
        cuenta: "78891011",
        password: "123",
        saldo: "200",
        currency: "USD"
    } // index 1
];
    
// => capturar el input de la cuenta
// query selector ocupa una sintaxis de clases
const cuenta = document.querySelector("#login_cuenta");
// => capturar el input del password
const password = document.querySelector("#password");
console.log(cuenta, password); // console log es para debugear y ver en la consola del navegador
// => Comprobar que sea la combinación correcta
    // => Evitar que se envien los datos al servidor
// traemos el elemento con el que vamos a interactuar
const buttonLogin = document.querySelector("button");
console.log(buttonLogin);
//function(){} es una función anónima
buttonLogin.addEventListener("click", function(e){
    // evitar que se mande al servidor
    e.preventDefault();
    console.log(cuenta.value);
    const currentCuenta = cuenta.value;
    console.log(password.value);
    const currentPassword = password.value;
    // for para buscar que la combinación sea la correcta
    let correctUser = null;
    for (let i = 0; i < banco.length; i++){
        const usuarioBd = banco[i];
        console.log({currentCuenta, currentPassword, usuarioBd});
        // Number si cambia a numeros todo y el parseInt no le importan las letras
        if(usuarioBd.cuenta === Number(currentCuenta) && usuarioBd.password === currentPassword){
            correctUser = usuarioBd;
            break;
        };
    };

    console.log(correctUser, "Sí lo encontramos");
    if (!correctUser){
        alert("Alto ahí!!!");
    }else{
        // Darle la bienvenida y mandarlo al otro HTML // guardar el usuario
        // => Guardar el intento de login
        // => Guardar el login // localStorage // sessionStorage propio de los navegadores
        //window.localStorage(correctUser)
        sessionStorage.setItem("correctUser", JSON.stringify(correctUser));
        alert(`Bienvenido ${correctUser.nombre}`);
        // => redirect a una página
        window.location.href = "atm.html";
        // => Si es correcta pasar y si no error
    };
});
// =>