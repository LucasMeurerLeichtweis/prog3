let campo_idade = document.getElementById("idade")
campo_idade.addEventListener("input", function(event){
    let idade = parseInt(event.target.value);
    let mensagem = "";

    if(!isNaN(idade)){
        if (idade >= 18){
            mensagem = "É maior de idade."
        }else{
            mensagem = "É menor de idade."
        }
    }
    document.getElementById("resposta_idade").textContent = mensagem;
})

const calcular = document.getElementById("calcular");
const tabuada = document.getElementById("tabuada");
calcular.addEventListener('click', function(){
    let valor = parseInt(document.getElementById('valor').value)
    tabuada.textContent ="";
    for(let i = 0; i<=10; i++){
        mensagem = `${i} * ${valor} = ${i*valor}`;
        let li = document.createElement("li")
        li.textContent = mensagem
        li.classList.add('blue');
        tabuada.appendChild(li)
    }
})