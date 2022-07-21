const form = document.querySelector('#formulario');
const todoDiv = document.querySelector('#todo');
const ulTodoDiv = todoDiv.querySelector('ul');
const spanMensagem = document.querySelector('.mensagem');
const inputTarefa = document.querySelector('.query');

document.addEventListener('click', (e)=>{
    const el = e.target;
    if(el.classList.contains('add')){
        const tarefa = inputTarefa.value;

        if(!tarefa){
            spanMensagem.innerHTML = 'Campo vazio';
            spanMensagem.classList.add('error');
            return;
        }
        console.log(tarefa)
        setResultado(tarefa);
    }

    if(el.classList.contains('btn-tarefas')){
        el.parentElement.remove();
    }
})

const criaButton = (li, id) => {
    li.innerText += ' ';
    const button = document.createElement('button');
    button.innerHTML = 'Apagar tarefa'
    button.type = 'button';
    button.classList.add('btn-tarefas');
    button.setAttribute('id', id);
    li.appendChild(button)
};

const criaP = () => {
    const p = document.createElement('p');
    p.classList.add('p-tarefas');
    return p;
};


const criaLi = (input) => {
    const li = document.createElement('li');
    const p = criaP();
    const spanMsg = spanMensagem;

    if(verificaExistenciaInput(input)){
        spanMsg.innerHTML = 'Essa tarefa já existe.'
        spanMsg.classList.add('error');
        return;
    } 
    
    li.classList.add(`${input}`);
    p.innerHTML = input;
    li.appendChild(p);
    criaButton(li, input)

    return criaUl(li);
};

const criaUl = (li) => {
    if(verificaExistenciaUl){
        ulTodoDiv.appendChild(li);
        return;
    }else{
        const ul = document.createElement('ul');
        ul.classList.add('formulario');
        ul.appendChild(li);
        return todoDiv.appendChild(ul);
    };
};

const verificaExistenciaInput = (input) => {
    const liTodoDiv = ulTodoDiv.querySelectorAll('li');
    for(li of liTodoDiv){
        if (li.classList.contains(input)) return true; else false;
    }
};
const verificaExistenciaUl = () => {
    for(ul of todoDiv.querySelectorAll('ul')){
       if (ul.classList.contains('formulario')) return true; else return false;
    }
}

const setResultado = (tarefa) => {
    const li = criaLi(tarefa)
    const ul = criaUl(li);
    return ul;
}

