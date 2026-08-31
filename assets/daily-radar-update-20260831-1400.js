(function () {
  const update = {
    stamp: '31 AGO 2026 · 14:00 BRT',
    sensor: 'GitHub API ao vivo + YouTube público via yt-dlp + agents-radar local como sensor auxiliar',
    top: [
      {
        rank: 1,
        title: 'Archify',
        type: 'Repositório',
        score: 100,
        status: 'Gravar agora',
        since: '28-31 AGO',
        why: 'Ainda é a melhor pauta imediata. Cresceu mais de mil stars desde a leitura das 08:00 e teve push hoje. O social ainda não é gigante, mas já existem vídeos recentes explicando o repo; a força principal continua sendo GitHub + visual demonstrável.',
        facts: '37.789 stars · 2.434 forks · JavaScript · push em 31 AGO · +1.111 stars desde 08:00 BRT',
        hook: 'Esse repo transforma arquitetura de software em vídeo explicável.',
        broll: 'GitHub top, demo oficial, README com exemplos, vídeo Codedigipt e vídeo Matheus como referência de explicação.',
        links: [
          ['GitHub', 'https://github.com/tt-a1i/archify'],
          ['Demo oficial', 'https://tt-a1i.github.io/archify/'],
          ['YouTube Matheus · 20.8k views', 'https://www.youtube.com/watch?v=0NelhyQwP-w'],
          ['YouTube Codedigipt · 6.5k views', 'https://www.youtube.com/watch?v=tuOd32Qikrs']
        ]
      },
      {
        rank: 2,
        title: 'Scientific Agent Skills',
        type: 'Repositório',
        score: 99,
        status: 'Gravar agora',
        since: '28-31 AGO',
        why: 'Continua forte e com narrativa clara: agentes especializados virando operadores de pesquisa. Tem canal oficial K-Dense com vídeos melhores que os vídeos pequenos de terceiros.',
        facts: '40.504 stars · 3.749 forks · Python · push em 31 AGO · +207 stars desde 08:00 BRT',
        hook: 'A IA não quer só responder perguntas. Ela quer fazer ciência.',
        broll: 'GitHub top, K-Dense org, diretório de skills e vídeos oficiais K-Dense.',
        links: [
          ['GitHub', 'https://github.com/K-Dense-AI/scientific-agent-skills'],
          ['K-Dense org', 'https://github.com/K-Dense-AI'],
          ['K-Dense YouTube · 12.7k views', 'https://www.youtube.com/watch?v=ZxbnDaD_FVg'],
          ['Busca YouTube', 'https://www.youtube.com/results?search_query=scientific+agent+skills+AI+scientist+github']
        ]
      },
      {
        rank: 3,
        title: 'OpenMontage',
        type: 'Repositório + criação de vídeo',
        score: 97,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Subiu menos em GitHub que Archify, mas tem social melhor para conteúdo: vídeos públicos com 15k, 14k e 17k views. É a melhor pauta se o objetivo for falar de vídeo/edição por agente.',
        facts: '54.943 stars · 6.854 forks · Python · último push 22 AGO · +106 stars desde 08:00 BRT',
        hook: 'E se um agente montasse o vídeo inteiro antes de você abrir o editor?',
        broll: 'Vídeos do canal oficial, vídeos Ray Codes/Julian Goldie, GitHub top, site OpenMontage e Trendshift.',
        links: [
          ['GitHub', 'https://github.com/calesthio/OpenMontage'],
          ['YouTube oficial · 15.1k views', 'https://www.youtube.com/watch?v=dyGjMasaZKs'],
          ['Ray Codes · 14.3k views', 'https://www.youtube.com/watch?v=FyM-0sJYIR8'],
          ['Julian Goldie · 17.6k views', 'https://www.youtube.com/watch?v=kHjROFbd7J4']
        ]
      },
      {
        rank: 4,
        title: 'Claude Memory / Agent Memory',
        type: 'Repositório + narrativa',
        score: 96,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Tema segue vivo: claude-mem teve push hoje, TencentDB Agent Memory teve push hoje e vídeos gerais sobre memória de agentes têm bom volume. Boa pauta para explicar uma dor real de agentes.',
        facts: 'claude-mem: 92.749 stars; TencentDB Agent Memory: 25.402 stars · ambos atualizados em 31 AGO',
        hook: 'O próximo salto dos agentes não é pensar mais. É lembrar melhor.',
        broll: 'README de memória, fluxo de contexto, TencentDB assets e vídeos gerais de agent memory.',
        links: [
          ['claude-mem', 'https://github.com/thedotmack/claude-mem'],
          ['TencentDB Agent Memory', 'https://github.com/TencentCloud/TencentDB-Agent-Memory'],
          ['Damian Galarza · 79k views', 'https://www.youtube.com/watch?v=Seu7nksZ_4k'],
          ['Syntax · 52k views', 'https://www.youtube.com/watch?v=cWBVMEHPgQU']
        ]
      },
      {
        rank: 5,
        title: 'Agent-Reach',
        type: 'Repo monitorado',
        score: 93,
        status: 'Usar como comparação',
        since: 'mantém hype',
        why: 'Não teve push novo desde 25 AGO, então não é prioridade principal hoje. Mantém valor como referência para pesquisa web/social por agentes e como comparação com o nosso próprio radar.',
        facts: '77.038 stars · 6.599 forks · Python · último push 25 AGO · +106 stars desde 08:00 BRT',
        hook: 'O agente que não navega está cego.',
        broll: 'README, lista de plataformas suportadas, exemplos de YouTube/GitHub/Reddit/X.',
        links: [
          ['GitHub', 'https://github.com/Panniantong/Agent-Reach'],
          ['Docs EN', 'https://github.com/Panniantong/Agent-Reach/blob/main/docs/README_en.md'],
          ['Busca YouTube', 'https://www.youtube.com/results?search_query=Agent-Reach+AI+agent+github']
        ]
      }
    ],
    monitored: [
      {
        repo: 'Panniantong/Agent-Reach',
        status: 'Ativo no radar',
        facts: '77.038 stars · 6.599 forks · 111 issues · último push 25 AGO',
        action: 'Usar como comparativo em pautas de agente navegando internet e social listening.'
      },
      {
        repo: 'TencentCloud/TencentDB-Agent-Memory',
        status: 'Ativo no radar',
        facts: '25.402 stars · 2.370 forks · 755 issues · último push 31 AGO',
        action: 'Boa pauta de memória compartilhada, LLM-Wiki, code graph e governança de contexto.'
      },
      {
        repo: 'duanyytop/agents-radar',
        status: 'Sensor de apoio',
        facts: '1.030 stars · 201 forks · último push 31 AGO · digest local mais recente disponível: 28 AGO',
        action: 'Continuar como fonte auxiliar; o painel Automatrix mantém decisão editorial final.'
      }
    ],
    social: [
      {
        topic: 'Archify',
        signal: 'Melhor vídeo direto: Matheus Battisti com 20.8k views. Melhor recente específico: Codedigipt com 6.5k views. Ainda não é viral social massivo.',
        use: 'Gancho + B-roll visual',
        link: 'https://www.youtube.com/watch?v=0NelhyQwP-w'
      },
      {
        topic: 'Scientific Agent Skills',
        signal: 'Canal K-Dense tem vídeo oficial com 12.7k views. Usar como prova de uso/educação, não como viralidade ampla.',
        use: 'Prova técnica + narrativa ciência',
        link: 'https://www.youtube.com/watch?v=ZxbnDaD_FVg'
      },
      {
        topic: 'OpenMontage',
        signal: 'Tem o melhor social proof entre os monitorados: vídeos na faixa de 14k-17k views. Bom para pauta de criação/edição com IA.',
        use: 'Comparação CapCut/agentic video',
        link: 'https://www.youtube.com/watch?v=kHjROFbd7J4'
      }
    ],
    official: [
      ['GitHub Trending', 'https://github.com/trending'],
      ['Trendshift', 'https://trendshift.io/'],
      ['agents-radar', 'https://github.com/duanyytop/agents-radar'],
      ['Archify GitHub', 'https://github.com/tt-a1i/archify'],
      ['Scientific Agent Skills GitHub', 'https://github.com/K-Dense-AI/scientific-agent-skills'],
      ['OpenMontage GitHub', 'https://github.com/calesthio/OpenMontage']
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
          <span class="daily-chip">◉ Atualização das 14:00</span>
          <h2>Radar revalidado para pauta de vídeo</h2>
        </div>
        <div class="daily-meta">
          <span>${update.stamp}</span>
          <small>${update.sensor}</small>
        </div>
      </div>

      <div class="daily-rule">
        <strong>Decisão editorial:</strong>
        Archify continua liderando por crescimento e visual. OpenMontage sobe em utilidade social porque tem mais vídeos com prova pública.
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
          <h3>Vídeos verificados</h3>
          <p>Views são públicas no YouTube no momento da leitura. Instagram não trouxe prova forte de Archify nesta rodada.</p>
        </div>
        <div class="daily-social-list">
          ${update.social.map(item => `
            <article>
              <strong>${item.topic}</strong>
              <span>${item.use}</span>
              <p>${item.signal}</p>
              <a href="${item.link}" target="_blank" rel="noreferrer">abrir referência ↗</a>
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
