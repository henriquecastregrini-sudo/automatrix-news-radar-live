(function () {
  const search = (base, query) => `${base}${encodeURIComponent(query)}`;

  const profileData = {
    fireship: {
      channel: 'https://www.youtube.com/@Fireship',
      channelSearch: 'https://www.youtube.com/@Fireship/search?query=',
      verified: [],
      niche: 'dev tools open-source AI agents GitHub',
      role: 'Transforma repo técnico em gancho rápido para devs.',
      power: { hype: 96, repo: 88, visual: 94, trust: 84, speed: 95 }
    },
    'matthew berman': {
      channel: 'https://www.youtube.com/@matthew_berman',
      channelSearch: 'https://www.youtube.com/@matthew_berman/search?query=',
      verified: [['Canal ativo em IA open-source', 'https://www.youtube.com/@matthew_berman/videos']],
      niche: 'open source AI agents models GitHub',
      role: 'Bom para descobrir ferramenta IA open-source cedo.',
      power: { hype: 91, repo: 86, visual: 80, trust: 76, speed: 88 }
    },
    worldofai: {
      channel: 'https://www.youtube.com/@worldofai',
      channelSearch: 'https://www.youtube.com/@worldofai/search?query=',
      verified: [],
      niche: 'AI agents GitHub repositories tutorials',
      role: 'Acha repos que viram tutorial, demo e B-roll visual.',
      power: { hype: 87, repo: 90, visual: 86, trust: 72, speed: 82 }
    },
    'all about ai': {
      channel: 'https://www.youtube.com/@AllAboutAI',
      channelSearch: 'https://www.youtube.com/@AllAboutAI/search?query=',
      verified: [],
      niche: 'AI workflows agents automation tools',
      role: 'Mostra quando uma ferramenta sai do nicho e vira uso prático.',
      power: { hype: 83, repo: 68, visual: 78, trust: 75, speed: 76 }
    },
    'wes roth': {
      channel: 'https://www.youtube.com/@WesRoth',
      channelSearch: 'https://www.youtube.com/@WesRoth/search?query=',
      verified: [['Canal ativo em notícias IA/mercado', 'https://www.youtube.com/@WesRoth/videos']],
      niche: 'AI news OpenAI Anthropic Google NVIDIA agents',
      role: 'Conecta repo com narrativa macro de mercado e Big Tech.',
      power: { hype: 90, repo: 58, visual: 73, trust: 77, speed: 86 }
    },
    'latent space': {
      channel: 'https://www.youtube.com/@latentspacepod',
      channelSearch: 'https://www.youtube.com/@latentspacepod/search?query=',
      verified: [],
      niche: 'LLM engineering agents infra papers',
      role: 'Contexto técnico profundo para entender a tese real.',
      power: { hype: 74, repo: 78, visual: 63, trust: 93, speed: 62 }
    },
    'simon willison': {
      channel: 'https://simonwillison.net/',
      channelSearch: 'https://www.google.com/search?q=site%3Asimonwillison.net+',
      verified: [],
      niche: 'LLM engineering AI agents security GitHub',
      role: 'Checagem crítica para separar hype de fato técnico.',
      power: { hype: 73, repo: 81, visual: 56, trust: 97, speed: 64 }
    },
    theprimeagen: {
      channel: 'https://www.youtube.com/@ThePrimeagen',
      channelSearch: 'https://www.youtube.com/@ThePrimeagen/search?query=',
      verified: [],
      niche: 'AI coding agents dev tools programming',
      role: 'Mede reação da cultura dev e se a pauta pegou entre programadores.',
      power: { hype: 86, repo: 71, visual: 77, trust: 79, speed: 82 }
    },
    theo: {
      channel: 'https://www.youtube.com/@t3dotgg',
      channelSearch: 'https://www.youtube.com/@t3dotgg/search?query=',
      verified: [],
      niche: 'AI coding agents web dev startups tools',
      role: 'Sinal forte para ferramentas dev entrando em produto/startups.',
      power: { hype: 82, repo: 67, visual: 73, trust: 79, speed: 78 }
    },
    'lucas montano': {
      channel: 'https://www.youtube.com/@LucasMontano',
      channelSearch: 'https://www.youtube.com/@LucasMontano/search?query=',
      verified: [],
      niche: 'IA GitHub repo tecnologia dev Brasil',
      role: 'Ajuda a traduzir assunto técnico para narrativa brasileira.',
      power: { hype: 79, repo: 65, visual: 75, trust: 83, speed: 73 }
    },
    'filipe deschamps': {
      channel: 'https://www.youtube.com/@FilipeDeschamps',
      channelSearch: 'https://www.youtube.com/@FilipeDeschamps/search?query=',
      verified: [],
      niche: 'notícias tecnologia inteligência artificial Brasil GitHub',
      role: 'Termômetro de assunto tech furando a bolha no Brasil.',
      power: { hype: 84, repo: 59, visual: 69, trust: 87, speed: 74 }
    },
    'código fonte tv': {
      channel: 'https://www.youtube.com/@codigofontetv',
      channelSearch: 'https://www.youtube.com/@codigofontetv/search?query=',
      verified: [],
      niche: 'IA programação GitHub tecnologia Brasil',
      role: 'Mede apelo didático de temas dev/IA para público BR.',
      power: { hype: 77, repo: 63, visual: 71, trust: 83, speed: 70 }
    }
  };

  function normalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function currentRadarTopics() {
    return [...document.querySelectorAll('.ranking-table .table-row:not(.table-head) strong')]
      .slice(0, 6)
      .map((el) => el.textContent.trim())
      .filter(Boolean);
  }

  function pixelBar(label, value) {
    const blocks = Math.max(1, Math.round(value / 10));
    return `<div class="rpg-stat">
      <span>${label}</span>
      <div class="rpg-track" aria-label="${label} ${value}">
        <i style="width:${value}%"></i>
        <em>${'▮'.repeat(blocks)}${'▯'.repeat(10 - blocks)}</em>
      </div>
      <b>${value}</b>
    </div>`;
  }

  function linkGroup(label, links) {
    return `<div class="rpg-link-group">
      <small>${label}</small>
      <div>${links.map(([text, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${text} ↗</a>`).join('')}</div>
    </div>`;
  }

  function profileLinks(profileName, data) {
    const baseQuery = `${profileName} ${data.niche}`;
    const channelQuery = data.channelSearch
      ? data.channelSearch + encodeURIComponent(data.niche)
      : search('https://www.youtube.com/results?search_query=', baseQuery);
    return [
      ['Canal/site oficial', data.channel],
      ['Buscar dentro do canal', channelQuery],
      ['Notícias recentes', search('https://www.google.com/search?tbm=nws&q=', baseQuery)],
      ['Posts no X', search('https://x.com/search?q=', `${baseQuery} filter:links`)],
      ['TikTok/Reels refs', search('https://www.tiktok.com/search?q=', baseQuery)],
      ['Repos relacionados', search('https://github.com/search?q=', data.niche)]
    ];
  }

  function topicLinks(profileName, data) {
    const topics = currentRadarTopics();
    if (!topics.length) return [];
    return topics.map((topic) => [
      topic,
      data.channelSearch
        ? data.channelSearch + encodeURIComponent(`${topic} ${data.niche}`)
        : search('https://www.youtube.com/results?search_query=', `${profileName} ${topic} ${data.niche}`)
    ]);
  }

  function verifiedLinks(data) {
    if (!data.verified || data.verified.length === 0) {
      return `<div class="verified-empty">Sem vídeo/post recente confirmado nesta varredura. Use os links de busca abaixo para checar antes de tratar como prova social.</div>`;
    }
    return data.verified
      .map(([text, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${text} ↗</a>`)
      .join('');
  }

  function upgradeProfiles() {
    document.querySelectorAll('.influencer-card').forEach((card) => {
      const profileName = card.querySelector('h3')?.textContent?.trim() || '';
      const data = profileData[normalize(profileName)];
      if (!data) return;

      if (card.dataset.socialUpgrade === '2') return;
      card.querySelectorAll('.profile-upgrade').forEach((old) => old.remove());
      card.dataset.socialUpgrade = '2';

      const panel = document.createElement('div');
      panel.className = 'profile-upgrade rpg-profile-upgrade';
      panel.innerHTML = `
        <div class="rpg-profile-header">
          <span>LV.${String(card.querySelector('.influencer-rank')?.textContent || '').replace('#', '').padStart(2, '0')}</span>
          <strong>${data.role}</strong>
        </div>
        ${linkGroup('Links principais do perfil', profileLinks(profileName, data))}
        <details class="power-console rpg-console">
          <summary>
            <span>Ficha de análise</span>
            <b>ABRIR STATUS</b>
          </summary>
          <div class="rpg-bars">
            ${pixelBar('Hype', data.power.hype)}
            ${pixelBar('Repo', data.power.repo)}
            ${pixelBar('Visual', data.power.visual)}
            ${pixelBar('Confiança', data.power.trust)}
            ${pixelBar('Velocidade', data.power.speed)}
          </div>
          <div class="verified-matches">
            <small>Matches verificados da varredura</small>
            <div>${verifiedLinks(data)}</div>
          </div>
          ${linkGroup('Busca cruzada com as pautas em alta', topicLinks(profileName, data))}
          <p class="rpg-note">Uso correto: pegar sinal social, gancho e B-roll. Fato técnico final sempre vem de repo, paper, docs oficiais ou fonte primária.</p>
        </details>`;

      const firstButton = card.querySelector('a');
      if (firstButton) firstButton.insertAdjacentElement('beforebegin', panel);
      else card.appendChild(panel);
    });
  }

  function upgradeRanking() {
    const table = document.querySelector('.ranking-table');
    if (!table || table.dataset.rpgUpgrade === '1') return;
    table.dataset.rpgUpgrade = '1';
    table.classList.add('ranking-rpg');

    [...table.querySelectorAll('.table-row:not(.table-head)')].forEach((row) => {
      const heatText = row.querySelector('.meter b')?.textContent || '0';
      const heat = Number.parseInt(heatText, 10) || 0;
      row.dataset.heat = heat;
      if (heat >= 97) row.classList.add('legendary');
      else if (heat >= 92) row.classList.add('epic');
      else row.classList.add('rare');

      const title = row.querySelector('strong')?.textContent?.trim();
      const meter = row.querySelector('.meter');
      if (meter && !meter.querySelector('.rpg-meter-label')) {
        const label = document.createElement('em');
        label.className = 'rpg-meter-label';
        label.textContent = heat >= 97 ? 'BOSS FIGHT' : heat >= 92 ? 'HOT QUEST' : 'SIDE QUEST';
        meter.appendChild(label);
      }
      if (title && !row.querySelector('.rpg-quick-links')) {
        const links = document.createElement('span');
        links.className = 'rpg-quick-links';
        links.innerHTML = `
          <a href="${search('https://www.youtube.com/results?search_query=', title + ' AI GitHub')}" target="_blank" rel="noreferrer">YT</a>
          <a href="${search('https://www.google.com/search?tbm=nws&q=', title + ' AI GitHub')}" target="_blank" rel="noreferrer">News</a>
          <a href="${search('https://x.com/search?q=', title + ' AI GitHub')}" target="_blank" rel="noreferrer">X</a>`;
        row.appendChild(links);
      }
    });
  }

  function run() {
    const socialText = document.querySelector('#social-radar .social-subhead p');
    if (socialText) {
      socialText.textContent = 'Esta área cruza os canais com as pautas do ranking. Link verificado entra como prova social; busca interna do canal serve apenas para checar se o perfil falou do assunto agora.';
    }
    upgradeProfiles();
    upgradeRanking();
  }

  window.addEventListener('load', run);
  window.addEventListener('hashchange', run);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
  setTimeout(run, 250);
  setTimeout(run, 1200);
})();
