const botao = document.getElementById("botao");
botao.style.backgroundColor = "red"
const nome = document.getElementById("nome");
nome.value = "Lucas"
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Você submeteu o formulário!")

});

