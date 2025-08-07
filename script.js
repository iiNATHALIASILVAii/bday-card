document.addEventListener('DOMContentLoaded', function () {
    const btnSim = document.getElementById('positivo');
    const btnNao = document.getElementById('negativo');
    const resposta = document.getElementById('respostaNegativa');

    btnSim.addEventListener('click', () => {
        window.location.href = 'parabens.html';
    });

    btnNao.addEventListener('click', () => {
        const mensagens = [
            "Ué... então vai chamar a Medu aí, pô! 😤",
            "Ih rapaz... então cadê a Medu? 👀",
            "Erro 404: Medu não encontrada. Tente de novo. 🔍",
            "Essa resposta não tá no script não, hein 😶",
            "Você não é a Medu? Então devolve o cartão! 🐸💌"
        ];

        const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        resposta.textContent = aleatoria;
        resposta.style.display = 'block';
    });
});
