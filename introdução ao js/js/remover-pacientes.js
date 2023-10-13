
    var tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function(event){
       
        event.target.parentNode.classList.add("fadeOut");
      
        //espera um pouco e depois de um certo tempo pode executar
       setTimeout(function(){
            event.target.parentNode.remove();
       },500);

       
       
        
        //cria um evento de remover
   })




 //   pacientes.forEach(function(paciente){
       // paciente.addEventListener("dblclick", function(){
       //     this.remove();
       // });
//})