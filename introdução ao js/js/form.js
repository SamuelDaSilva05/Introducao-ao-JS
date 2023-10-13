    
    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    
    botaoAdicionar.addEventListener("click", function(event) {
        event.preventDefault(); //evento de clicar no botão adicionar!
        
        var form = document.querySelector("#form-adiciona");
        // Extraindo informações
        
        var paciente = obtemPacienteDoFormulario(form);
        // Cria a tr e td paciente 

        var erros = validaPaciente(paciente);
        
        if(erros.length > 0) {
            exibeMensagemDeErro(erros);
            return;
        }

        adicionaPacieneNaTabela(paciente);
        
        form.reset(); // limpa os campos de dados.

        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = ""; // limpa as mensagens de erro no final.

    });

        function adicionaPacieneNaTabela(paciente) {
            var pacienteTr = montaTr(paciente);
            var tabela = document.querySelector("#tabela-pacientes");
            tabela.appendChild(pacienteTr);

        }

        function exibeMensagemDeErro(erros) {
            var ul = document.querySelector("#mensagens-erro");
            
            ul.innerHTML = "";

            erros.forEach(function(erro){
               var li = document.createElement("li"); 
                li.textContent = erro;
                ul.appendChild(li);
            
            })

        }


        // cria objetos
        function obtemPacienteDoFormulario(form) {

            var paciente = {

                nome: form.nome.value,
                peso: form.peso.value,
                altura: form.altura.value,
                gordura: form.gordura.value,
                imc: calculaImc(form.peso.value, form.altura.value)
            }
        

    return paciente; 

}
    // adiciona uma nova linha de dados do paciente.

    function montaTr(paciente) {
            var pacienteTr = document.createElement("tr");
            pacienteTr.classList.add("paciente");

            pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
            pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
            pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
            pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
            pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

        return pacienteTr;
}

    // adiciona novos dados por coluna na tabela.
    function montaTd(dado, classe) {
        var td= document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }

    function validaPaciente(paciente){

        // Mostra mensagem de erro na tela.
        var erros = [];

        if( paciente.nome.length == 0) {
            erros.push("O paciente precisa de um nome!");
        }

        if(!validaPeso(paciente.peso)) {
            erros.push("Peso é inválido!"); 
        }

        if(!validaAltura(paciente.altura)) {
            erros.push("Altura inválida!");
        } 
         
        if( paciente.gordura.length == 0 ) {
            erros.push("A Gordura está incorreta");
        }

        if( paciente.peso.length == 0) {
            erros.push("O peso não pode estar vazio!");
        }

        if( paciente.altura.length == 0) {
            erros.push("A altura não pode estar vazia");
        }
    
        return erros;
    }