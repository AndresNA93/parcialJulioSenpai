// const name = document.getElementById("name");
// const password = document.getElementById("password");

// alert("ingresa una contrasena de entre 7 y 20 caracteres :)")
// password.onblur = function (){
//     if (password.value.length < 7){
// alert("Tu contrasena debe ser mas larga!")
//     }
//     else if (password.value.length > 20){
//         alert("Ingresa una contrasena mas corta!")
//     }
//     console.log (password.value);
// }

// var objeto_window_referencia;
// var configuracion_ventana = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function abrir_Popup() {
  objeto_window_referencia = window.open("", "Pagina_CNN", configuracion_ventana);
}

// Llamamos a la función

abrir_Popup();