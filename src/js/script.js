document.addEventListener('DOMContentLoaded', () => {
  inicializarMenuMobile();
  inicializarBotaoVoltarTopo();
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

/* ---------------------------------------------------------
   Botão "voltar ao topo": aparece após rolar a página
   --------------------------------------------------------- */
function inicializarBotaoVoltarTopo() {
  const botaoVoltarTopo = document.getElementById('botaoVoltarTopo');
  if (!botaoVoltarTopo) return;

  const LIMITE_ROLAGEM = 400; // pixels rolados para exibir o botão

  window.addEventListener('scroll', () => {
    if (window.scrollY > LIMITE_ROLAGEM) {
      botaoVoltarTopo.classList.add('visivel');
    } else {
      botaoVoltarTopo.classList.remove('visivel');
    }
  });

  botaoVoltarTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}