var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    let alvoEvento = event.target; // selecionando o TD
    let paiDoAlvo = alvoEvento.parentNode; // selecionando o pai do TD, o TR

    paiDoAlvo.classList.add("fadeOut"); // efeito

    setTimeout(function() {
        paiDoAlvo.remove(); // removendo o TR
    },500);
});