(function () {
  const radarTopics = [
    ['Apache Maka', 'https://www.youtube.com/results?search_query=Apache+Maka+AI+agent+workspace'],
    ['Claude Plugins', 'https://www.youtube.com/results?search_query=Claude+plugins+marketplace+AI+agents'],
    ['AI Job Search', 'https://www.youtube.com/results?search_query=AI+job+search+Claude+Code+GitHub'],
    ['Karpathy Skills', 'https://www.youtube.com/results?search_query=Karpathy+Claude+Code+agents+skills']
  ];

  const profiles = {
    fireship: {
      channel: 'https://www.youtube.com/@Fireship',
      radarSearch: 'https://www.youtube.com/results?search_query=Fireship+AI+agents+GitHub+repos',
      role: 'Gancho rápido para devs',
      power: { hype: 94, repo: 88, visual: 92, trust: 82 },
      notes: 'Forte para transformar repo técnico em frase curta, memeável e fácil de entender.'
    },
    'matthew berman': {
      channel: 'https://www.youtube.com/@matthew_berman',
      radarSearch: 'https://www.youtube.com/results?search_query=Matthew+Berman+open+source+AI+agents+GitHub',
      role: 'Descoberta de IA open-source',
      power: { hype: 90, repo: 84, visual: 78, trust: 76 },
      notes: 'Bom para achar ferramenta cedo. Usar como sinal social e validar tudo no repo/paper.'
    },
    worldofai: {
      channel: 'https://www.youtube.com/@worldofai',
      radarSearch: 'https://www.youtube.com/results?search_query=WorldofAI+GitHub+AI+agent+repository',
      role: 'Tutoriais de agentes e demos',
      power: { hype: 86, repo: 88, visual: 84, trust: 70 },
      notes: 'Útil para ver quais repos viram tutorial e têm B-roll demonstrável.'
    },
    'all about ai': {
      channel: 'https://www.youtube.com/@AllAboutAI',
      radarSearch: 'https://www.youtube.com/results?search_query=All+About+AI+agents+tools+workflow',
      role: 'Workflow prático',
      power: { hype: 82, repo: 68, visual: 76, trust: 74 },
      notes: 'Bom para detectar quando um tema saiu do nicho dev e virou uso real.'
    },
    'wes roth': {
      channel: 'https://www.youtube.com/@WesRoth',
      radarSearch: 'https://www.youtube.com/results?search_query=Wes+Roth+AI+news+OpenAI+Anthropic+agents',
      role: 'Narrativa macro de mercado',
      power: { hype: 89, repo: 58, visual: 72, trust: 76 },
      notes: 'Ajuda a conectar repo com OpenAI, Anthropic, Google, NVIDIA e tese de mercado.'
    },
    'latent space': {
      channel: 'https://www.youtube.com/@latentspacepod',
      radarSearch: 'https://www.youtube.com/results?search_query=Latent+Space+AI+agents+LLM+engineering',
      role: 'Contexto técnico profundo',
      power: { hype: 74, repo: 78, visual: 62, trust: 92 },
      notes: 'Melhor para entender a tese técnica. Nem sempre vira Shorts direto.'
    },
    'simon willison': {
      channel: 'https://simonwillison.net/',
      radarSearch: 'https://www.google.com/search?q=Simon+Willison+AI+agents+GitHub+LLM',
      role: 'Checagem técnica e segurança',
      power: { hype: 72, repo: 80, visual: 55, trust: 96 },
      notes: 'Excelente para separar hype de fato técnico sólido antes de gravar.'
    },
    theprimeagen: {
      channel: 'https://www.youtube.com/@ThePrimeagen',
      radarSearch: 'https://www.youtube.com/results?search_query=ThePrimeagen+AI+coding+agents',
      role: 'Cultura dev e reação',
      power: { hype: 84, repo: 70, visual: 76, trust: 78 },
      notes: 'Mostra se a ferramenta está entrando na conversa mainstream entre programadores.'
    },
    theo: {
      channel: 'https://www.youtube.com/@t3dotgg',
      radarSearch: 'https://www.youtube.com/results?search_query=Theo+t3dotgg+AI+coding+agents+developer+tools',
      role: 'Web dev, startups e ferramentas',
      power: { hype: 80, repo: 66, visual: 72, trust: 78 },
      notes: 'Bom para medir adoção entre devs de produto e startups.'
    },
    'lucas montano': {
      channel: 'https://www.youtube.com/@LucasMontano',
      radarSearch: 'https://www.youtube.com/results?search_query=Lucas+Montano+IA+GitHub+repo',
      role: 'Adaptação para público BR',
      power: { hype: 78, repo: 64, visual: 74, trust: 82 },
      notes: 'Referência para traduzir tema técnico em narrativa brasileira.'
    },
    'filipe deschamps': {
      channel: 'https://www.youtube.com/@FilipeDeschamps',
      radarSearch: 'https://www.youtube.com/results?search_query=Filipe+Deschamps+inteligencia+artificial+GitHub',
      role: 'Notícia tech BR',
      power: { hype: 82, repo: 58, visual: 68, trust: 86 },
      notes: 'Bom termômetro de assunto técnico furando bolha no Brasil.'
    },
    'código fonte tv': {
      channel: 'https://www.youtube.com/@codigofontetv',
      radarSearch: 'https://www.youtube.com/results?search_query=C%C3%B3digo+Fonte+TV+IA+GitHub',
      role: 'Didática dev BR',
      power: { hype: 76, repo: 62, visual: 70, trust: 82 },
      notes: 'Ajuda a medir quais pautas dev/IA têm apelo didático no Brasil.'
    }
  };

  function normalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function bar(label, value) {
    return `<div class="power-row">
      <span>${label}</span>
      <div class="power-track"><i style="width:${value}%"></i></div>
      <b>${value}</b>
    </div>`;
  }

  function topicLinks() {
    return radarTopics
      .map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
      .join('');
  }

  function upgradeCards() {
    document.querySelectorAll('.influencer-card').forEach((card) => {
      if (card.dataset.socialUpgrade === '1') return;
      const title = normalize(card.querySelector('h3')?.textContent);
      const data = profiles[title];
      if (!data) return;

      card.dataset.socialUpgrade = '1';
      const searchButton = card.querySelector('a');
      const panel = document.createElement('div');
      panel.className = 'profile-upgrade';
      panel.innerHTML = `
        <div class="profile-actions">
          <a href="${data.channel}" target="_blank" rel="noreferrer">Abrir canal ↗</a>
          <a href="${data.radarSearch}" target="_blank" rel="noreferrer">Vídeos sobre o radar ↗</a>
        </div>
        <details class="power-console">
          <summary>
            <span>Análise do perfil</span>
            <b>POWER</b>
          </summary>
          <div class="console-role">${data.role}</div>
          ${bar('Hype', data.power.hype)}
          ${bar('Repo', data.power.repo)}
          ${bar('Visual', data.power.visual)}
          ${bar('Confiança', data.power.trust)}
          <p>${data.notes}</p>
          <div class="radar-topic-links">
            <small>Buscar vídeos que batem com as pautas atuais:</small>
            ${topicLinks()}
          </div>
        </details>`;

      if (searchButton) {
        searchButton.insertAdjacentElement('beforebegin', panel);
      } else {
        card.appendChild(panel);
      }
    });
  }

  const observer = new MutationObserver(upgradeCards);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('hashchange', upgradeCards);
  window.addEventListener('load', upgradeCards);
  setTimeout(upgradeCards, 100);
  setTimeout(upgradeCards, 800);
})();
