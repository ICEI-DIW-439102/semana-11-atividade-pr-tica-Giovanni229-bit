const dados = {
  pessoasHistoricas: [
    {
      id: 1,
      nome: "Edson Arantes do Nascimento (Pelé)",
      subtitulo: "O Rei do Futebol",
      descricao: "O Rei do Futebol não apenas jogou; ele parou guerras e unificou nações através do esporte. Com três títulos mundiais, sua trajetória é o pilar da história esportiva do século XX.",
      imagem: "https://assets.goal.com/images/v3/blt456e7a69a0b8b25c/180bc2dd1491eb109ef4f45166ee5d04518af658.png?auto=webp&format=pjpg&width=3840&quality=60",
      nacionalidade: "Brasileira",
      nascimento: "23 de outubro de 1940",
      falecimento: "29 de dezembro de 2022",
      areaDeAtuacao: "Futebol",
      legado: "Único jogador tricampeão mundial; embaixador da paz pela ONU.",
      fotos: [
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJC0ADsIVcNBPlKvcYXtT3hhLIzXL-4-mzA&s", titulo: "Pelé com a seleção brasileira" },
        { url: "https://s2-oglobo.glbimg.com/IfHK8YdbJkSRxhyJN9PDtcvnheY=/0x0:723x996/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/b/K/VIb8HYRauJVTAWNR0gaA/101619411-uso-mediante-novo-pagamento-ao-fotografo-rfussball-wm-1970-in-mexikopele-bra-oben-wir-1-.jpg", titulo: "Pelé comemorando gol" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Pele_celebrating_1970.jpg", titulo: "Copa do Mundo 1970" },
        { url: "https://elcomercio.pe/resizer/f2ggNheGWtaW0g6grU6SMTjJ2E8=/980x653/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/NJJEAH4OFJHAFHBZ4NC6NNYJCY.jpg", titulo: "Pelé eternizado" }
      ]
    },
    {
      id: 2,
      nome: "Napoleão Bonaparte",
      subtitulo: "O General que Quase Conquistou o Mundo",
      descricao: "O general que QUASE conquistou toda a Europa! Além das conquistas militares, seu legado jurídico influenciou as constituições de diversos países modernos, incluindo o Brasil.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/250px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
      nacionalidade: "Francesa (nascido na Córsega)",
      nascimento: "15 de agosto de 1769",
      falecimento: "5 de maio de 1821",
      areaDeAtuacao: "Militar / Política / Direito",
      legado: "Código Napoleônico; reformas administrativas que moldaram a Europa moderna.",
      fotos: [
        { url: "https://www.meisterdrucke.pt/kunstwerke/800px/Jacques_Marie_Gaston_Onfray_de_Breville_-_Napoleon_Bonaparte_consulting_maps_in_his_study_-_(MeisterDrucke-132510).jpg", titulo: "Napoleão em seu gabinete" },
        { url: "https://i0.wp.com/culturalizando.blog/wp-content/uploads/2021/10/napoleaoalpesjacqueslouisdavid1.jpg?fit=1200%2C731&ssl=1", titulo: "Napoleão cruzando os Alpes" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqy84X9ZbNOZVjeRvZReKigojIXY1gQ6RkQ&s", titulo: "Napoleão no trono imperial" },
        { url: "https://preview.redd.it/map-of-napoleons-empire-v0-3spvhi8jdy991.png?auto=webp&s=de9515b796a51efe74ea5427fb674733da3b51a6", titulo: "Mapa do Império Napoleônico" }
      ]
    },
    {
      id: 3,
      nome: "Cleópatra VII",
      subtitulo: "A Rainha do Nilo",
      descricao: "A última faraó do Egito antigo, Cleópatra dominava nove idiomas, era estudiosa de matemática e filosofia, e usou sua inteligência diplomática para manter o poder do Egito frente a Roma.",
      imagem: "https://revistaoeste.com/oestegeral/wp-content/uploads/2026/02/Imagem-1-68.jpg",
      nacionalidade: "Egípcia (dinastia Ptolemaica)",
      nascimento: "69 a.C.",
      falecimento: "12 de agosto de 30 a.C.",
      areaDeAtuacao: "Política / Diplomacia / Filosofia",
      legado: "Símbolo de poder feminino na Antiguidade; aliança com Roma que preservou o Egito.",
      fotos: [
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypD55cmu8mP6M5sZThEpTb8L4nmC0EKtx4A&s", titulo: "Busto de Cleópatra VII" },
        { url: "https://static.wixstatic.com/media/878620_ec7d841e93014d75b4e5a7baca27ad96~mv2.jpg/v1/fill/w_887,h_498,al_c,lg_1,q_85/878620_ec7d841e93014d75b4e5a7baca27ad96~mv2.jpg", titulo: "Encontro com Marco Antônio" },
        { url: "https://content.nationalgeographic.pt/medio/import/attachment/edicoesespeciais/HistoriaNG/2/Cesariao/c3.jpg", titulo: "Cleópatra e Júlio César" },
        { url: "https://veja.abril.com.br/wp-content/uploads/2025/06/3-1200x680_sc_piece-de-monnaie-egyptienne-50-piastres-reine-cleopatre-an-1442-2021-c-collection-partic.jpg.jpg?crop=1&resize=1212,909", titulo: "Moeda com o arquétipo de Cleópatra" }
      ]
    },
    {
      id: 4,
      nome: "Zumbi dos Palmares",
      subtitulo: "O Símbolo da Resistência",
      descricao: "Líder do Quilombo dos Palmares, o maior e mais duradouro refúgio de escravizados fugitivos das Américas. Zumbi tornou-se o maior símbolo da resistência negra no Brasil.",
      imagem: "https://pebesen.wordpress.com/wp-content/uploads/2012/11/zumi.jpg?w=640",
      nacionalidade: "Brasileira",
      nascimento: "c. 1655",
      falecimento: "20 de novembro de 1695",
      areaDeAtuacao: "Liderança / Resistência / Política",
      legado: "20 de novembro é o Dia da Consciência Negra no Brasil em sua homenagem.",
      fotos: [
        { url: "https://pebesen.wordpress.com/wp-content/uploads/2012/11/zumi.jpg?w=640", titulo: "Retrato de Zumbi dos Palmares" },
        { url: "https://super.abril.com.br/wp-content/uploads/2018/07/578d41710e2163457520703cquilombo-dos-palmares1.jpeg?crop=1&resize=1212,909", titulo: "Quilombo dos Palmares" },
        { url: "https://www.santos.sp.gov.br/static/files_www/styles/newspagesimples/public/field/image/henrique_teixeira_1783.jpg?itok=1f7PXLhE", titulo: "Memorial Zumbi em Alagoas" },
        { url: "https://simec.com.br/media/img_noticias/219420171120-consciencia-negra.png", titulo: "Dia da Consciência Negra" }
      ]
    },
    {
      id: 5,
      nome: "Leonardo da Vinci",
      subtitulo: "O Gênio Universal",
      descricao: "Pintor, escultor, arquiteto, músico, matemático, engenheiro, inventor, anatomista, geólogo, botânico e escritor. Da Vinci personificou o ideal renascentista do homem universal.",
      imagem: "https://www.cartacapital.com.br/wp-content/uploads/2019/02/Kombo-Leonardo-Da-Vinci-und-Leonardo-di-Caprio-1024x1001.jpg",
      nacionalidade: "Italiana",
      nascimento: "15 de abril de 1452",
      falecimento: "2 de maio de 1519",
      areaDeAtuacao: "Arte / Ciência / Engenharia / Filosofia",
      legado: "Mona Lisa, A Última Ceia, estudos anatômicos, estudos para engenharia, física, etc.",
      fotos: [
        { url: "https://amaitepoesiaecia.com.br/wp-content/uploads/2026/05/leonardo-da-vinci.jpg", titulo: "Autorretrato de Da Vinci" },
        { url: "https://arteref.com/wp-content/uploads/2020/02/mona.jpg", titulo: "A Mona Lisa" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9H8DaoBC8vcjO7gYP6vP6LITsqd9r9v-tMA&s", titulo: "A Última Ceia" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nfhKPczqCICVBvmkaVkSXIbnGTN7UgZN-Q&s", titulo: "Homem Vitruviano" }
      ]
    }
  ],
  destaques: [3, 1]
};

// ─── Utilitários ───────────────────────────────────────────────────────────────

function getPessoaById(id) {
  return dados.pessoasHistoricas.find(p => p.id === parseInt(id));
}

function getDestaques() {
  return dados.destaques.map(id => getPessoaById(id));
}

// ─── index.html ────────────────────────────────────────────────────────────────

function renderCarousel() {
  const destaques = getDestaques();
  const indicators = document.getElementById('carousel-indicators');
  const inner = document.getElementById('carousel-inner');
  indicators.innerHTML = '';
  inner.innerHTML = '';
  destaques.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('data-bs-target', '#carousel-destaques');
    btn.setAttribute('data-bs-slide-to', i);
    if (i === 0) btn.classList.add('active');
    indicators.appendChild(btn);

    const item = document.createElement('div');
    item.className = 'carousel-item' + (i === 0 ? ' active' : '');
    item.innerHTML = `
      <div class="carousel-slide-custom">
        <div class="carousel-img-wrapper">
          <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/500x400/8d6e63/ffffff?text=${encodeURIComponent(p.nome)}'">
        </div>
        <div class="carousel-caption-custom">
          <span class="carousel-badge">${p.subtitulo}</span>
          <h3>${p.nome}</h3>
          <p>${p.descricao}</p>
          <a href="detalhes.html?id=${p.id}" class="btn-ver-mais">
            Ver mais <i class="bi bi-arrow-right-circle-fill ms-1"></i>
          </a>
        </div>
      </div>`;
    inner.appendChild(item);
  });
}

function renderGrid(lista) {
  const grid = document.getElementById('grid-pessoas');
  grid.innerHTML = '';
  if (lista.length === 0) {
    grid.innerHTML = '<div class="col-12 text-center py-5"><p class="sem-resultados"><i class="bi bi-search me-2"></i>Nenhuma pessoa encontrada.</p></div>';
    return;
  }
  lista.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
      <a href="detalhes.html?id=${p.id}" class="card-historico-link">
        <div class="card-historico">
          <div class="card-img-wrapper">
            <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/400x300/8d6e63/ffffff?text=${encodeURIComponent(p.nome)}'">
            <div class="card-overlay">
              <span><i class="bi bi-eye-fill me-1"></i>Ver detalhes</span>
            </div>
          </div>
          <div class="card-body-historico">
            <span class="card-subtitulo">${p.subtitulo}</span>
            <h5 class="card-nome">${p.nome}</h5>
            <p class="card-desc">${p.descricao.substring(0, 100)}...</p>
            <div class="card-meta">
              <span><i class="bi bi-geo-alt-fill me-1"></i>${p.nacionalidade}</span>
            </div>
          </div>
        </div>
      </a>`;
    grid.appendChild(col);
  });
}

let filtroAtivo = false;
let termoPesquisa = '';

function getPessoasFiltradas() {
  let lista = dados.pessoasHistoricas;
  if (termoPesquisa) {
    lista = lista.filter(p =>
      p.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      p.descricao.toLowerCase().includes(termoPesquisa.toLowerCase())
    );
  }
  return lista;
}

function filtrarPessoas() {
  termoPesquisa = document.getElementById('campoPesquisa').value;
  renderGrid(getPessoasFiltradas());
}

function mostrarTodos() {
  filtroAtivo = false;
  termoPesquisa = '';
  document.getElementById('campoPesquisa').value = '';
  document.getElementById('btnTodos').classList.add('ativo');
  document.getElementById('btnFiltro').classList.remove('ativo');
  renderGrid(dados.pessoasHistoricas);
}

function alternarFiltro() {
  filtroAtivo = true;
  document.getElementById('btnFiltro').classList.add('ativo');
  document.getElementById('btnTodos').classList.remove('ativo');
  renderGrid(getPessoasFiltradas());
}

function iniciarIndex() {
  document.getElementById('campoPesquisa').addEventListener('keydown', e => {
    if (e.key === 'Enter') filtrarPessoas();
  });
  renderCarousel();
  renderGrid(dados.pessoasHistoricas);
}

// ─── detalhes.html ─────────────────────────────────────────────────────────────

function renderDetalhe() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const pessoa = getPessoaById(id);

  if (!pessoa) {
    document.getElementById('detalhe-conteudo').innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-exclamation-triangle" style="font-size:3rem;color:#8d6e63"></i>
        <p class="mt-3" style="font-size:1.3rem">Pessoa não encontrada.</p>
        <a href="index.html" class="btn-ver-mais mt-3 d-inline-block">Voltar ao início</a>
      </div>`;
    return;
  }

  document.title = pessoa.nome + ' | Absolutamente Histórico';

  document.getElementById('detalhe-conteudo').innerHTML = `
    <h2 class="titulo-secao sepia mt-4">
      <i class="bi bi-person-lines-fill me-2"></i>INFORMAÇÕES GERAIS
    </h2>
    <div class="detalhe-card">
      <div class="detalhe-img-col">
        <img src="${pessoa.imagem}" alt="${pessoa.nome}" class="detalhe-foto" onerror="this.src='https://via.placeholder.com/400x500/8d6e63/ffffff?text=${encodeURIComponent(pessoa.nome)}'">
        <span class="detalhe-badge">${pessoa.subtitulo}</span>
      </div>
      <div class="detalhe-info-col">
        <h2 class="detalhe-nome">${pessoa.nome}</h2>
        <p class="detalhe-descricao">${pessoa.descricao}</p>
        <div class="detalhe-itens">
          <div class="detalhe-item">
            <span class="detalhe-label"><i class="bi bi-globe2 me-1"></i>Nacionalidade</span>
            <span class="detalhe-valor">${pessoa.nacionalidade}</span>
          </div>
          <div class="detalhe-item">
            <span class="detalhe-label"><i class="bi bi-calendar-heart me-1"></i>Nascimento</span>
            <span class="detalhe-valor">${pessoa.nascimento}</span>
          </div>
          <div class="detalhe-item">
            <span class="detalhe-label"><i class="bi bi-calendar-x me-1"></i>Falecimento</span>
            <span class="detalhe-valor">${pessoa.falecimento}</span>
          </div>
          <div class="detalhe-item">
            <span class="detalhe-label"><i class="bi bi-briefcase-fill me-1"></i>Área de Atuação</span>
            <span class="detalhe-valor">${pessoa.areaDeAtuacao}</span>
          </div>
          <div class="detalhe-item detalhe-item-full">
            <span class="detalhe-label"><i class="bi bi-trophy-fill me-1"></i>Legado</span>
            <span class="detalhe-valor">${pessoa.legado}</span>
          </div>
        </div>
      </div>
    </div>`;

  const fotosGrid = document.getElementById('fotos-grid');
  pessoa.fotos.forEach(foto => {
    const div = document.createElement('div');
    div.className = 'foto-item';
    div.innerHTML = `
      <img src="${foto.url}" alt="${foto.titulo}" onerror="this.src='https://via.placeholder.com/300x200/8d6e63/ffffff?text=Foto'">
      <div class="foto-overlay"><span>${foto.titulo}</span></div>`;
    fotosGrid.appendChild(div);
  });
}



  