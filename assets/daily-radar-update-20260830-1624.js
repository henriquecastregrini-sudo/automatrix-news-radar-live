(function () {
  const update = {
    stamp: '30 AGO 2026 · 16:24 BRT',
    sensor: 'GitHub API ao vivo + agents-radar local como sensor auxiliar + busca pública',
    top: [
      {
        rank: 1,
        title: 'Archify',
        type: 'Repositório',
        score: 100,
        status: 'Gravar agora',
        since: '28-30 AGO',
        why: 'Subiu forte desde a última medição e tem demonstração visual imediata: transformar texto em diagramas animados e verificáveis. Bom para Shorts porque o resultado aparece sem explicação longa.',
        facts: '34.022 stars · 2.166 forks · JavaScript · push em 30 AGO · +4.898 stars versus leitura de 29 AGO',
        hook: 'Esse repo transforma arquitetura de software em vídeo explicável.',
        broll: 'GitHub top, README com prompts, demo oficial, diagrama animado/export.',
        links: [
          ['GitHub', 'https://github.com/tt-a1i/archify'],
          ['Demo oficial', 'https://tt-a1i.github.io/archify/'],
          ['Busca social', 'https://www.youtube.com/results?search_query=archify+ai+architecture+diagram+github']
        ]
      },
      {
        rank: 2,
        title: 'Scientific Agent Skills',
        type: 'Repositório',
        score: 99,
        status: 'Gravar agora',
        since: '28-30 AGO',
        why: 'Continua com tração alta e tese forte: agentes deixam de ser chat e viram operadores de pesquisa científica. A narrativa conversa com autonomia, ciência e open-source.',
        facts: '38.959 stars · 3.643 forks · Python · push em 29 AGO · +1.734 stars versus leitura de 29 AGO',
        hook: 'A IA não quer só responder perguntas. Ela quer fazer ciência.',
        broll: 'GitHub top, lista de skills, K-Dense site, walkthroughs oficiais.',
        links: [
          ['GitHub', 'https://github.com/K-Dense-AI/scientific-agent-skills'],
          ['K-Dense', 'https://www.k-dense.ai/'],
          ['Skill directory', 'https://agenticskills.io/skills/claude-scientific-skills']
        ]
      },
      {
        rank: 3,
        title: 'Claude Memory / Contexto persistente',
        type: 'Repositório + narrativa',
        score: 96,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Memória persistente virou dor real em agentes. O tema cruza HN, repos de memória e nossa própria necessidade de manter padrões de edição, radar e skills.',
        facts: 'thedotmack/claude-mem: 92.650 stars · 8.153 forks · push em 29 AGO',
        hook: 'O próximo salto dos agentes não é raciocínio. É lembrar direito.',
        broll: 'README do claude-mem, gráfico de contexto, comparação com TencentDB Agent Memory.',
        links: [
          ['claude-mem', 'https://github.com/thedotmack/claude-mem'],
          ['TencentDB Agent Memory', 'https://github.com/TencentCloud/TencentDB-Agent-Memory'],
          ['HN agent memory', 'https://news.ycombinator.com/item?id=49450816']
        ]
      },
      {
        rank: 4,
        title: 'Agent-Reach',
        type: 'Repo monitorado',
        score: 94,
        status: 'Usar como comparação',
        since: 'mantém hype',
        why: 'Segue muito forte como tese de “agente com olhos na internet”. A utilidade é clara para pesquisa, social listening e coleta de B-roll sem depender só de APIs pagas.',
        facts: '76.737 stars · 6.570 forks · Python · push em 25 AGO · updated em 30 AGO',
        hook: 'O agente que não navega está cego.',
        broll: 'README, docs de plataformas, exemplos de Twitter/Reddit/YouTube/GitHub.',
        links: [
          ['GitHub', 'https://github.com/Panniantong/Agent-Reach'],
          ['Docs EN', 'https://github.com/Panniantong/Agent-Reach/blob/main/docs/README_en.md'],
          ['Open Source Alternatives', 'https://www.opensourcealternatives.to/item/agent-reach']
        ]
      },
      {
        rank: 5,
        title: 'OpenMontage',
        type: 'Repositório',
        score: 93,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Mesmo sem push recente no core, segue como pauta útil porque conecta diretamente com produção de vídeo por agentes, o tema central do workflow Automatrix.',
        facts: '54.570 stars · 6.784 forks · Python · último push em 22 AGO · atividade pública em 30 AGO',
        hook: 'E se um agente montasse o vídeo inteiro antes de você abrir o editor?',
        broll: 'GitHub top, README, pipeline de vídeo, issue de tutorial público.',
        links: [
          ['GitHub', 'https://github.com/calesthio/OpenMontage'],
          ['Issue tutorial', 'https://github.com/calesthio/OpenMontage/issues/150'],
          ['Análise externa', 'https://pinggy.io/blog/openmontage_agentic_video_production/']
        ]
      }
    ],
    monitored: [
      {
        repo: 'Panniantong/Agent-Reach',
        status: 'Ativo no radar',
        facts: '76.737 stars · 6.570 forks · 110 issues · último push 25 AGO',
        action: 'Usar como comparação quando a pauta envolver agente navegando web/social.'
      },
      {
        repo: 'TencentCloud/TencentDB-Agent-Memory',
        status: 'Ativo no radar',
        facts: '25.262 stars · 2.357 forks · 751 issues · último push 27 AGO',
        action: 'Monitorar para pauta de memória compartilhada, LLM-Wiki, code graph e skill reuse.'
      },
      {
        repo: 'duanyytop/agents-radar',
        status: 'Sensor de apoio',
        facts: '1.028 stars · 196 forks · último push 30 AGO · digest local mais recente disponível: 28 AGO',
        action: 'Continuar como coletor auxiliar. O Automatrix decide ranking final.'
      }
    ],
    social: [
      {
        topic: 'Archify',
        signal: 'Busca social necessária hoje: ainda não tratar views como métrica sem abrir post específico.',
        use: 'Demonstração visual + B-roll',
        link: 'https://www.youtube.com/results?search_query=archify+ai+architecture+diagram+github'
      },
      {
        topic: 'Scientific Agent Skills',
        signal: 'Tem walkthroughs oficiais no ecossistema K-Dense; validar vídeos recentes antes de usar como prova social.',
        use: 'Gancho científico + prova técnica',
        link: 'https://www.youtube.com/results?search_query=K-Dense+Scientific+Agent+Skills'
      },
      {
        topic: 'OpenMontage',
        signal: 'Tema ainda bom para comparação com edição de vídeo por IA; social precisa checagem de posts novos.',
        use: 'Comparação CapCut/agentic video',
        link: 'https://www.youtube.com/results?search_query=OpenMontage+AI+video+production+github'
      }
    ],
    official: [
      ['GitHub Trending', 'https://github.com/trending'],
      ['agents-radar', 'https://github.com/duanyytop/agents-radar'],
      ['Product Hunt AI', 'https://www.producthunt.com/topics/artificial-intelligence'],
      ['Hacker News', 'https://news.ycombinator.com/'],
      ['Anthropic MHS', 'https://www.anthropic.com/news/model-hardware-standard-research-preview']
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
          <span class="daily-chip">◉ Atualização das 16:24</span>
          <h2>Radar revalidado para pauta de vídeo</h2>
        </div>
        <div class="daily-meta">
          <span>${update.stamp}</span>
          <small>${update.sensor}</small>
        </div>
      </div>

      <div class="daily-rule">
        <strong>Decisão editorial:</strong>
        priorizar repos com crescimento real, visual demonstrável e narrativa simples. Itens sem sinal novo ficam fora do ranking principal.
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
          <p>Links abaixo são portas de busca. Números sociais só entram no radar quando estiverem públicos no post específico.</p>
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

