document.addEventListener('DOMContentLoaded', () => {
  inicializarMenuMobile();
});

/* ---------------------------------------------------------
   Menu mobile: abre e fecha a navegação em telas pequenas
   --------------------------------------------------------- */
function inicializarMenuMobile() {
  const botaoMenu = document.getElementById('botaoMenuMobile');
  const navegacaoMobile = document.getElementById('navegacaoMobile');

  if (!botaoMenu || !navegacaoMobile) return;

  botaoMenu.addEventListener('click', () => {
    const estaAberto = navegacaoMobile.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', String(estaAberto));
  });

  // Fecha o menu automaticamente ao clicar em algum link
  navegacaoMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navegacaoMobile.classList.remove('aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });
}