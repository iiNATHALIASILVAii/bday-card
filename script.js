document.addEventListener("DOMContentLoaded", function () {
  const btnSim = document.getElementById("positivo");
  const btnNao = document.getElementById("negativo");
  const resposta = document.getElementById("respostaNegativa");
  const somNegativo = document.getElementById("somNegativo");

  btnSim.addEventListener("click", () => {
    window.location.href = "parabens.html";
  });

  btnNao.addEventListener("click", () => {
    const mensagens = [
      "Ué... ent vai chamar a Medu aí, po! 😤",
      "Ih rapaz... então cade a Medu? 👀",
      "Erro 404: Medu não encontrada. Tente de novo. 🔍",
      "Essa resposta não tá no script não, hein 😶",
      "Você não é a Medu? Então devolve o cartão! 🐸💌",
    ];

    const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    resposta.textContent = aleatoria;
    resposta.style.display = "block";

    //Toca o som quando o botão 'negativo' é ativado
    if (somNegativo) {
      somNegativo.currentTime = 0; //Para resolver o looping de reprodução
      somNegativo.play();
    }
  });
});
