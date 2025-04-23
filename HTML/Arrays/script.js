let tarefas = []
const formulario = document.getElementById("formulario");
const lista_tarefas = document.getElementById("tarefas");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let tarefa = document.getElementById("tarefa").value;
    tarefas.push(tarefa)
    document.getElementById("tarefa").value = "";
    lista_tarefas.textContent ="";
    tarefas.forEach(function(elemento){
        let li = document.createElement("li");
        li.textContent = elemento;
        lista_tarefas.appendChild(li);
    })
})