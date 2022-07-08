window.onload=function(){
    const btnOcultarModal = document.querySelector(".cierreModal")
    btnOcultarModal.addEventListener("click", function(){
        document.querySelector(".fondo").classList.add("ocultar");
    })
    const btnModal = document.querySelector("#btnIngresar")
    btnModal.addEventListener("click", function(){
        document.querySelector(".fondo").classList.remove("ocultar");
    })
}
