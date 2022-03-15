function lista(){
    const inputTarefa = document.querySelector('.input-tarefa')
    const btnTarefa = document.querySelector('.btn-tarefa')
    const tarefas = document.querySelector('.tarefas')

    function criaLi(){
        const li = document.createElement('li');
        return li;
        
    }

    inputTarefa.addEventListener('keypress', function(e){ //<- ativando o tecla de atalho para botão 
        if (e.keyCode === 13){
            if (!inputTarefa.value) return;    
            criaTarefa(inputTarefa.value);
        }
    })

    function limpaInput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function criaBotaoApagar(li) {
        li.innerText += ' '; 
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        botaoApagar.setAttribute('title', 'Apagar essa tarefa');
        li.appendChild(botaoApagar);
    }

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar','').trim();
            console.log(tarefaTexto);
            listaDeTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas); // <- array convertido para JSON
        localStorage.setItem('tarefas', tarefasJSON); // banco de dados local na memoria interna do navegador
    }

    function adicionaTarefasSalvas() { // pegando do banco de dados interno em json e colocando na tela 
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa)
        }
    }

    adicionaTarefasSalvas()

    function criaTarefa(textoInput){
        const li = criaLi();
        li.innerText = textoInput;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas()
    }

    btnTarefa.addEventListener('click', function() {
        if (!inputTarefa.value) return;        
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', function(e) { 
        const el = e.target;

        if (el.classList.contains('apagar')) {
            el.parentElement.remove();//<- apaga a tag pai
            salvarTarefas();
        }
    });

}

lista()

