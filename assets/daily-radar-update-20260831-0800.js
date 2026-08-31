(function () {
  const update = {
    stamp: '31 AGO 2026 · 08:01 BRT',
    sensor: 'GitHub API ao vivo + busca pública + agents-radar local como sensor auxiliar',
    top: [
      {
        rank: 1,
        title: 'Archify',
        type: 'Repositório',
        score: 100,
        status: 'Gravar agora',
        since: '28-31 AGO',
        why: 'Continua sendo a melhor pauta imediata: crescimento real, push hoje e visual muito demonstrável. A história é simples: transformar arquitetura, workflow e diagramas em material animado verificável.',
        facts: '36.678 stars · 2.353 forks · JavaScript · push em 31 AGO · +2.313 stars desde 30 AGO 20:00',
        hook: 'Esse repo transforma arquitetura de software em vídeo explicável.',
        broll: 'GitHub top, demo oficial, README com exemplos, diagrama animado/export.',
        links: [
          ['GitHub', 'https://github.com/tt-a1i/archify'],
          ['Demo oficial', 'https://tt-a1i.github.io/archify/'],
          ['Busca YouTube', 'https://www.youtube.com/results?search_query=archify+ai+architecture+diagram+github'],
          ['Busca X', 'https://x.com/search?q=archify%20github%20ai&src=typed_query&f=live']
        ]
      },
      {
        rank: 2,
        title: 'Scientific Agent Skills',
        type: 'Repositório',
        score: 99,
        status: 'Gravar agora',
        since: '28-31 AGO',
        why: 'Mantém hype e passou de 40k stars. O README agora fala em 190k cientistas e 165 skills, reforçando a tese de agentes especializados para ciência real.',
        facts: '40.297 stars · 3.734 forks · Python · push em 31 AGO · +1.149 stars desde 30 AGO 20:00',
        hook: 'A IA não quer só responder perguntas. Ela quer fazer ciência.',
        broll: 'GitHub top, K-Dense org, diretório de skills, lista de bases científicas.',
        links: [
          ['GitHub', 'https://github.com/K-Dense-AI/scientific-agent-skills'],
          ['K-Dense org', 'https://github.com/K-Dense-AI'],
          ['Skill directory', 'https://agenticskills.io/skills/claude-scientific-skills'],
          ['Busca YouTube', 'https://www.youtube.com/results?search_query=scientific+agent+skills+AI+scientist+github']
        ]
      },
      {
        rank: 3,
        title: 'Claude Memory / Agent Memory',
        type: 'Repositório + narrativa',
        score: 97,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Memória persistente continua como narrativa estrutural. claude-mem teve push hoje e TencentDB Agent Memory também atualizou hoje, então o tema segue vivo.',
        facts: 'claude-mem: 92.711 stars · push em 31 AGO; TencentDB Agent Memory: 25.364 stars · push em 31 AGO',
        hook: 'O próximo salto dos agentes não é pensar mais. É lembrar melhor.',
        broll: 'README de memória, fluxo de contexto, TencentDB assets, comparação entre memória local e memória de equipe.',
        links: [
          ['claude-mem', 'https://github.com/thedotmack/claude-mem'],
          ['TencentDB Agent Memory', 'https://github.com/TencentCloud/TencentDB-Agent-Memory'],
          ['Busca HN', 'https://hn.algolia.com/?q=agent%20memory']
        ]
      },
      {
        rank: 4,
        title: 'Agent-Reach',
        type: 'Repo monitorado',
        score: 94,
        status: 'Usar como comparação',
        since: 'mantém hype',
        why: 'Não teve push novo desde 25 AGO, mas continua ganhando stars e segue útil como comparativo de agentes com acesso visual/social à internet.',
        facts: '76.932 stars · 6.583 forks · Python · último push 25 AGO · +165 stars desde 30 AGO 20:00',
        hook: 'O agente que não navega está cego.',
        broll: 'README, lista de plataformas suportadas, exemplos de YouTube/GitHub/Reddit/X.',
        links: [
          ['GitHub', 'https://github.com/Panniantong/Agent-Reach'],
          ['Docs EN', 'https://github.com/Panniantong/Agent-Reach/blob/main/docs/README_en.md'],
          ['Busca YouTube', 'https://www.youtube.com/results?search_query=Agent-Reach+AI+agent+github']
        ]
      },
      {
        rank: 5,
        title: 'OpenMontage',
        type: 'Repositório',
        score: 92,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Crescimento ainda existe, mas sem push recente no core. Mantém valor editorial porque a narrativa de produção de vídeo agentic conversa com o workflow Automatrix.',
        facts: '54.837 stars · 6.844 forks · Python · último push 22 AGO · +220 stars desde 30 AGO 20:00',
        hook: 'E se um agente montasse o vídeo inteiro antes de você abrir o editor?',
        broll: 'GitHub top, site OpenMontage, Trendshift, pipeline de vídeo e issues/tutoriais.',
        links: [
          ['GitHub', 'https://github.com/calesthio/OpenMontage'],
          ['Trendshift', 'https://trendshift.io/repositories/24682'],
          ['Site', 'https://www.openmontage.video/'],
          ['Busca YouTube', 'https://www.youtube.com/results?search_query=OpenMontage+AI+video+production+github']
        ]
      }
    ],
    monitored: [
      {
        repo: 'Panniantong/Agent-Reach',
        status: 'Ativo no radar',
        facts: '76.932 stars · 6.583 forks · 111 issues · último push 25 AGO',
        action: 'Usar como comparativo em pautas de agente navegando internet e social listening.'
      },
      {
        repo: 'TencentCloud/TencentDB-Agent-Memory',
        status: 'Ativo no radar',
        facts: '25.364 stars · 2.365 forks · 754 issues · último push 31 AGO',
        action: 'Boa pauta de memória compartilhada, LLM-Wiki, code graph e governança de contexto.'
      },
      {
        repo: 'duanyytop/agents-radar',
        status: 'Sensor de apoio',
        facts: '1.030 stars · 199 forks · último push 31 AGO · digest local mais recente disponível: 28 AGO',
        action: 'Continuar como fonte auxiliar; o painel Automatrix mantém decisão editorial final.'
      }
    ],
    social: [
      {
        topic: 'Archify',
        signal: 'Prioridade de verificação social: buscar Shorts/Reels com demo de diagrama animado. Usar métricas só quando visíveis no post.',
        use: 'Gancho + B-roll visual',
        link: 'https://www.youtube.com/results?search_query=archify+ai+architecture+diagram+github'
      },
      {
        topic: 'Scientific Agent Skills',
        signal: 'Verificar criadores falando de “AI scientist”, agent skills e automação de pesquisa. Tema tem apelo técnico e aspiracional.',
        use: 'Prova técnica + narrativa ciência',
        link: 'https://www.youtube.com/results?search_query=scientific+agent+skills+AI+scientist+github'
      },
      {
        topic: 'Agent Memory',
        signal: 'Cruzar claude-mem, TencentDB Agent Memory e discussões sobre contexto persistente. É pauta de base para explicar por que agentes esquecem.',
        use: 'Comparação + tese de futuro',
        link: 'https://www.youtube.com/results?search_query=AI+agent+memory+persistent+context+github'
      }
    ],
    official: [
      ['GitHub Trending', 'https://github.com/trending'],
      ['agents-radar', 'https://github.com/duanyytop/agents-radar'],
      ['Trendshift', 'https://trendshift.io/'],
      ['Product Hunt AI', 'https://www.producthunt.com/topics/artificial-intelligence'],
      ['Hacker News', 'https://news.ycombinator.com/'],
      ['Archify demo', 'https://tt-a1i.github.io/archify/']
    ]
  };

  function linkList(items) {
    return items.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label} ↗</a>`).join('');
  }

  function injectDailyBriefing() {
    document.querySelectorAll('.daily-radar-update').forEach((node) => node.remove());

    const anchor =
      document.querySelector('.agents-radar-signal') ||
      document.querySelector('#ranking') ||
      document.querySelector('.control-panel') ||
      document.querySelector('main') ||
      document.body;

    const section = document.createElement('section');
    section.className = 'daily-radar-update';
    section.innerHTML = `
      <div class="daily-radar-header">
        <div>
          <span class="daily-chip">◉ Atualização das 08:00</span>
          <h2>Radar revalidado para pauta de vídeo</h2>
        </div>
        <div class="daily-meta">
          <span>${update.stamp}</span>
          <small>${update.sensor}</small>
        </div>
      </div>

      <div class="daily-rule">
        <strong>Decisão editorial:</strong>
        manter o ranking enxuto. Entram primeiro os temas com crescimento real, fonte confiável, visual demonstrável e gancho claro para vídeo.
      </div>

      <div class="daily-ranking">
        ${update.top.map(item => `
          <article class="daily-card">
            <div class="daily-card-top">
              <span class="daily-rank">#${item.rank}</span>
              <div>
                <h3>${item.title}</h3>
                <p>${item.type} · ${item.since}</p>
              </div>
              <div class="daily-score" title="Score editorial, não métrica factual">
                <i style="--score:${item.score}%"></i><b>${item.score}</b>
              </div>
            </div>
            <div class="daily-status">${item.status}</div>
            <p class="daily-why">${item.why}</p>
            <div class="daily-facts">${item.facts}</div>
            <div class="daily-hook">Gancho: ${item.hook}</div>
            <div class="daily-facts">B-roll/prova: ${item.broll}</div>
            <div class="daily-links">${linkList(item.links)}</div>
          </article>
        `).join('')}
      </div>

      <div class="daily-social">
        <div>
          <span class="daily-chip">▣ Repos monitorados</span>
          <h3>Status factual</h3>
          <p>Métricas puxadas agora via GitHub API. O score continua editorial e separado dos números reais.</p>
        </div>
        <div class="daily-social-list">
          ${update.monitored.map(item => `
            <article>
              <strong>${item.repo}</strong>
              <span>${item.status}</span>
              <p>${item.facts}</p>
              <p>${item.action}</p>
            </article>
          `).join('')}
        </div>
      </div>

      <div class="daily-social">
        <div>
          <span class="daily-chip">▣ Social Signals</span>
          <h3>Verificar posts hoje</h3>
          <p>Links abaixo são portas de busca. Números sociais só entram quando estiverem públicos e visíveis no post específico.</p>
        </div>
        <div class="daily-social-list">
          ${update.social.map(item => `
            <article>
              <strong>${item.topic}</strong>
              <span>${item.use}</span>
              <p>${item.signal}</p>
              <a href="${item.link}" target="_blank" rel="noreferrer">buscar referências ↗</a>
            </article>
          `).join('')}
        </div>
      </div>

      <div class="daily-sources">
        <span>Fontes verificadas nesta execução</span>
        ${linkList(update.official)}
      </div>
    `;

    anchor.insertAdjacentElement('beforebegin', section);
    refreshTimestamp();
  }

  function refreshTimestamp() {
    Array.from(document.querySelectorAll('body *')).forEach((el) => {
      const text = (el.textContent || '').trim();
      if (text.includes('Última atualização') && text.length < 140) {
        el.textContent = `◉ Última atualização: ${update.stamp}`;
      }
    });
  }

  window.addEventListener('load', injectDailyBriefing);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectDailyBriefing, { once: true });
  } else {
    injectDailyBriefing();
  }
  setTimeout(injectDailyBriefing, 500);
  setTimeout(refreshTimestamp, 1200);
})();
