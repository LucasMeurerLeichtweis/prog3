const formulario = document.getElementById("formulario")
gols2.addEventListener("input", function(event){
    event.preventDefault();
    alert("Você submeteu a resposta!")

    let texto = document.getElementById("vencedor");

    let gols1 = document.getElementById("gols1").value;
    let gols2 = document.getElementById("gols2").value;
    let time1 = document.getElementById("time1").value;
    let time2 = document.getElementById("time2").value;
    if (gols1 > gols2){
        texto.textContent =`${time1} ganhou a partida.`;
    } else if (gols2 > gols1){
        texto.textContent =`${time2} ganhou a partida.`;
    }else if (gols2==gols1){
        texto.textContent="A partida terminou empatada.";
    }
    
});