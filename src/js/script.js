document.addEventListener('DOMContentLoaded', () => {
  inicializarMenuMobile();
  inicializarBotaoVoltarTopo();
  inicializarListaTecnologias();
  inicializarFormularioContato();
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

/* ---------------------------------------------------------
    Animação das Tecnologias dominadas
    Feita em forma de array para facil manutencão
   --------------------------------------------------------- */
function inicializarListaTecnologias() {
  const lista = document.getElementById('listaTecnologias');
  if (!lista) return;

  const tecnologias = [
    { nome: 'React', imagem: null, simbolo: '⚛', alt: 'React' },
    { nome: 'ASP.NET', imagem: './src/assets/img/logoAsp.png', alt: 'ASP.NET' },
    { nome: 'Unity', imagem: './src/assets/img/logoUnity.png', alt: 'Unity' },
    { nome: 'Node.js', imagem: './src/assets/img/logoNode.png', alt: 'Node.js' },
    { nome: 'C#', imagem: './src/assets/img/logoC%23.png', alt: 'C sharp' },
    { nome: 'JavaScript', imagem: './src/assets/img/logoJs.png', alt: 'JavaScript' },
    { nome: 'HTML', imagem: './src/assets/img/logoHTML.png', alt: 'HTML' },
    { nome: 'CSS', imagem: './src/assets/img/logoCSS.png', alt: 'CSS' },
    { nome: 'Blender', imagem: './src/assets/img/logoBlender.png', alt: 'Blender' },
    { nome: 'MySQL', imagem: './src/assets/img/logoSQL.png', alt: 'MySQL' },
    { nome: 'Bootstrap', imagem: './src/assets/img/logoBootstrap.png', alt: 'Bootstrap' },
    { nome: 'CorelDRAW', imagem: './src/assets/img/logoCorel.png', alt: 'CorelDRAW' }
  ];
  
  const fragmento = document.createDocumentFragment();

  tecnologias.forEach((tecnologia) => {
    const item = document.createElement('li');
    item.className = 'tecnologia';

    const icone = document.createElement('span');
    icone.className = 'tecnologia__icone';

    if (tecnologia.imagem) {
      const imagem = document.createElement('img');
      imagem.src = tecnologia.imagem;
      imagem.alt = tecnologia.alt;
      icone.appendChild(imagem);
    } else {
      icone.classList.add('tecnologia__icone--fallback');
      icone.textContent = tecnologia.simbolo;
      icone.setAttribute('aria-label', tecnologia.alt);
    }

    const nome = document.createElement('span');
    nome.textContent = tecnologia.nome;
    item.append(icone, nome);
    fragmento.appendChild(item);
  });

  lista.appendChild(fragmento);

  const itensOriginais = Array.from(lista.children);
  itensOriginais.forEach((item) => {
    const copia = item.cloneNode(true);
    copia.setAttribute('aria-hidden', 'true');
    lista.appendChild(copia);
  });

  lista.classList.add('lista-tecnologias--animada');
}

/* ---------------------------------------------------------
   Formulário de contato
   --------------------------------------------------------- */
function inicializarFormularioContato() {
  const formulario = document.getElementById('formularioContato');
  const mensagemStatus = document.getElementById('mensagemStatus');

  if (!formulario || !mensagemStatus) return;

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = formulario.nome.value.trim();
    const email = formulario.email.value.trim();
    const mensagem = formulario.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      mensagemStatus.textContent = 'Por favor, preencha nome, e-mail e mensagem.';
      mensagemStatus.style.color = '#D14343';
      return;
    }

    mensagemStatus.textContent = 'Mensagem enviada! Em breve entraremos em contato. 🚀';
    mensagemStatus.style.color = '#6D28D9';
    formulario.reset();
  });
}