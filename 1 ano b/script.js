document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-proximo");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const passoAtual = botao.closest(".passo");
      const proximoPassoId = botao.getAttribute("data-proximo");

      // Remove a classe 'ativo' do passo atual
      passoAtual.classList.remove("ativo");

      // Adiciona a classe 'ativo' ao próximo passo
      const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);
      if (proximoPasso) {
        proximoPasso.classList.add("ativo");
      }
    });
  });
});
