document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário
    alert("Você submeteu o pedido!");
    const formData = new FormData(this); 
    let dados = Object.fromEntries(formData.entries()); 
    console.log(dados); 

    let total = 0;
    let quantidade = parseInt(dados.quant) || 1;

    // Valores dos tamanhos
    const precosTamanho = {
        P: 10.00,
        M: 15.00,
        G: 20.00
    };

    // Valores dos sabores
    const precosSabor = {
        queijo: 4.00,
        calabresa: 3.50,
        morango: 8.00
    };

    // Valor da entrega
    const precoEntrega = dados.entrega === "entr" ? 5.00 : 0.00;

    // Obtendo o tamanho escolhido
    if (!dados.tamanho) {
        alert("Por favor, selecione o tamanho da panqueca.");
        return;
    }
    total += precosTamanho[dados.tamanho];

    // Obtendo os sabores escolhidos
    let saboresSelecionados = [];
    document.querySelectorAll("input[type='checkbox']:checked").forEach((checkbox) => {
        saboresSelecionados.push(checkbox.name);
    });

    if (saboresSelecionados.length === 0) {
        alert("Por favor, selecione pelo menos um sabor.");
        return;
    }

    saboresSelecionados.forEach(sabor => {
        total += precosSabor[sabor];
    });

    // Multiplica pelo número de panquecas
    total *= quantidade;

    // Adiciona o valor da entrega (fixo, não multiplicado)
    total += precoEntrega;

    // Exibe o resultado
    document.getElementById("texto").textContent = `Total: R$ ${total.toFixed(2)}`;
});
