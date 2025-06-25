const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Você submeteu o formulário!")

   const formData = new FormData(this);
   let dados = Object.fromEntries(formData.entries());
   console.log(dados);
   
   
});