window.onload=function(){
    const btnOcultarModal = document.querySelector(".cierreModal")
    btnOcultarModal.addEventListener("click", function(){
        document.querySelector(".fondo").classList.add("ocultar");
    })
    const btnModal = document.querySelector("#btnIngresar")
    btnModal.addEventListener("click", function(){
        document.querySelector(".fondo").classList.remove("ocultar");
    })
    const textArea = document.querySelector("#rellenar")
    textArea.addEventListener("input", function(event){
        if(event.target.value.length>255){
            alert("No somos tu diario intimo papu")
        };
    })
}
