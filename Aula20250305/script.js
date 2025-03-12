
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Você submeteu o formulário!")

   const formData = new FormData(this);
   let dados = Object.fromEntries(formData.entries());
   console.log(dados);
   /*
   console.log(`${dados['nome']} tem ${dados['idade']} anos`)
    */
   
    let texto = document.getElementById("texto");
    //texto.textContent = `${dados['nome']} tem ${dados['idade']} anos`;//

    if(formData.has("publico") && formData.has("privado")) {
        texto.textContent =`${dados['nome']} vem de transporte público e privado`;
    }else if(formData.has("publico")){
        texto.textContent =`${dados['nome']} vem de transporte público`;
    }else if(formData.has("privado")){
        texto.textContent =`${dados['nome']} vem de transporte privado`;
    }else{
        texto.textContent =`${dados['nome']} não vem`;
    }
   
});

