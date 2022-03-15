for (var i = 0; i < document.querySelectorAll(".bateria").length; i++) {
    
    document.querySelectorAll(".bateria")[i].addEventListener("click", function quandoClicado() {
        
        var buttonInnerHTML = this.innerHTML;
        tocarSons(buttonInnerHTML);
        animacaoDoTeclado(buttonInnerHTML);
    });
    
}

document.addEventListener("keydown", function(event) {
    tocarSons(event.key);
    animacaoDoTeclado(event.key);
});

function tocarSons(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sons/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sons/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sons/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sons/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sons/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sons/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sons/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
}

function animacaoDoTeclado(tecladoDigitado) {
    var tecla = document.querySelector("." + tecladoDigitado);
    tecla.classList.add("pressionado");

    setTimeout( function () {
        tecla.classList.remove("pressionado");
    }, 100);
}