(function () {
  const update = {
    stamp: '28 AGO 2026 · 20:08 BRT',
    sensor: 'agents-radar digest 2026-08-28 + GitHub API',
    top: [
      {
        rank: 1,
        title: 'Scientific Agent Skills',
        type: 'Repositório',
        score: 100,
        status: 'Gravar agora',
        since: '28 AGO',
        why: 'Biblioteca de skills científicas para transformar agentes em fluxo de pesquisa real. Combina repo ativo, narrativa forte e B-roll técnico fácil.',
        facts: '36.529 stars · 3.473 forks · push em 28 AGO',
        hook: 'A próxima guerra da IA não é chat. É ciência automatizada por agentes.',
        links: [
          ['GitHub', 'https://github.com/K-Dense-AI/scientific-agent-skills'],
          ['Digest agents-radar', 'https://github.com/duanyytop/agents-radar/tree/main/digests/2026-08-28']
        ]
      },
      {
        rank: 2,
        title: 'Archify',
        type: 'Repositório',
        score: 98,
        status: 'Gravar agora',
        since: '28 AGO',
        why: 'Skill para diagramas animados e verificáveis. Forte para conteúdo visual porque o benefício aparece na tela em segundos.',
        facts: '27.221 stars · 1.723 forks · push em 28 AGO',
        hook: 'A IA agora desenha arquitetura de software como se fosse um vídeo.',
        links: [
          ['GitHub', 'https://github.com/tt-a1i/archify']
        ]
      },
      {
        rank: 3,
        title: 'OpenMontage',
        type: 'Repositório',
        score: 96,
        status: 'Monitorar hoje',
        since: 'mantém hype · 27-28 AGO',
        why: 'Sistema agentic para produção de vídeo. Continua relevante para o nosso fluxo porque cruza IA, edição, roteiros e automação criativa.',
        facts: '53.272 stars · 6.643 forks · último push em 22 AGO · atividade pública em 28 AGO',
        hook: 'O CapCut open-source de agentes ainda não morreu. Ele virou pipeline.',
        links: [
          ['GitHub', 'https://github.com/calesthio/OpenMontage']
        ]
      },
      {
        rank: 4,
        title: 'Agent-Reach',
        type: 'Repo monitorado',
        score: 94,
        status: 'Usar como comparação',
        since: 'mantém hype',
        why: 'Continua forte como tese de “agente com olhos para internet”: GitHub, Reddit, YouTube, X e buscas sem API paga.',
        facts: '76.345 stars · 6.529 forks · push em 25 AGO · updated em 28 AGO',
        hook: 'O navegador virou sentido básico de um agente de IA.',
        links: [
          ['GitHub', 'https://github.com/Panniantong/Agent-Reach']
        ]
      },
      {
        rank: 5,
        title: 'TencentDB Agent Memory',
        type: 'Repo monitorado',
        score: 92,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Memória compartilhada para agentes: conversa, skill, LLM-Wiki e code graph. Tema recorrente em HN e repos de agentes.',
        facts: '25.030 stars · 2.322 forks · push em 27 AGO · updated em 28 AGO',
        hook: 'Sem memória, agente é estagiário eterno. Esse repo tenta resolver isso.',
        links: [
          ['GitHub', 'https://github.com/TencentCloud/TencentDB-Agent-Memory']
        ]
      }
    ],
    social: [
      {
        topic: 'Agent skills e ciência',
        signal: 'Forte para roteiro; ainda precisa validação manual de vídeo social recente antes de usar números.',
        use: 'Gancho + prova técnica',
        link: 'https://www.youtube.com/results?search_query=scientific+agent+skills+AI+repo'
      },
      {
        topic: 'Archify / diagramas com IA',
        signal: 'Bom potencial visual; procurar Shorts/Reels demonstrando “repo para diagrama animado”.',
        use: 'B-roll + demonstração',
        link: 'https://www.youtube.com/results?search_query=archify+ai+architecture+diagram+github'
      },
      {
        topic: 'OpenMontage / produção de vídeo agentic',
        signal: 'Conecta diretamente com o nicho de criação de vídeo; validar posts recentes antes de tratar como prova social.',
        use: 'Comparação com CapCut/HeyGen',
        link: 'https://www.youtube.com/results?search_query=OpenMontage+AI+video+production+github'
      }
    ],
    official: [
      ['Anthropic MHS', 'https://www.anthropic.com/news/model-hardware-standard-research-preview'],
      ['Gemini Omni 1.1 Flash', 'https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/'],
      ['HN GLM-5.3-Flash', 'https://news.ycombinator.com/item?id=49449507'],
      ['Product Hunt AI', 'https://www.producthunt.com/topics/artificial-intelligence']
    ]
  };

  function linkList(items) {
    return items.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label} ↗</a>`).join('');
  }

  function injectDailyBriefing() {
    if (document.querySelector('.daily-radar-update')) return;

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
          <span class="daily-chip">◉ Atualização das 20:00</span>
          <h2>Radar revalidado para pauta de vídeo</h2>
        </div>
        <div class="daily-meta">
          <span>${update.stamp}</span>
          <small>${update.sensor}</small>
        </div>
      </div>

      <div class="daily-rule">
        <strong>Regra aplicada:</strong>
        o ranking principal mantém só assuntos com sinal recente, utilidade clara para vídeo, fonte verificável, repo ativo ou narrativa ainda quente.
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
            <div class="daily-links">${linkList(item.links)}</div>
          </article>
        `).join('')}
      </div>

      <div class="daily-social">
        <div>
          <span class="daily-chip">▣ Social Signals</span>
          <h3>Validação social para buscar hoje</h3>
          <p>Estes links são buscas/referências de verificação. Só use números de views/likes quando estiverem públicos e visíveis no post.</p>
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
        <span>Fontes oficiais/revisadas desta execução</span>
        ${linkList(update.official)}
      </div>
    `;

    anchor.insertAdjacentElement('beforebegin', section);
    refreshTimestamp();
  }

  function refreshTimestamp() {
    const candidates = Array.from(document.querySelectorAll('body *')).filter(el => {
      const text = (el.textContent || '').trim();
      return text.includes('Última atualização') && text.length < 120;
    });
    candidates.slice(0, 3).forEach(el => {
      el.textContent = `◉ Última atualização: ${update.stamp}`;
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
