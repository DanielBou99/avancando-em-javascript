var paciente = document.querySelectorAll(".paciente");

for (let i=0; i < paciente.length; i++) {

    let tdImc = paciente[i].querySelector(".info-imc");
    
    let peso = paciente[i].querySelector(".info-peso").textContent;
    let altura = paciente[i].querySelector(".info-altura").textContent;

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente[i].classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente[i].classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc  = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso,altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}