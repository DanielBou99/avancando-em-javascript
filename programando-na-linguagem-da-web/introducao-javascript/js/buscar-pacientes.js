let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    
    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            document.querySelector("#erro-ajax").classList.add("invisivel");

            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            document.querySelector("#erro-ajax").classList.remove("invisivel");
        }
    });

    xhr.send();
});