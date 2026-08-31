(function () {
  const update = {
    stamp: '31 AGO 2026 · 20:00 BRT',
    sensor: 'GitHub API ao vivo + YouTube público via yt-dlp + agents-radar local como sensor auxiliar',
    top: [
      {
        rank: 1,
        title: 'Archify',
        type: 'Repositório',
        score: 100,
        status: 'Gravar agora',
        since: '28-31 AGO',
        why: 'Continua como melhor pauta de descoberta antecipada. O repo cresceu de 37.789 para 38.533 stars desde 14:00 e segue com push hoje. O ponto fraco é social: há vídeos bons, mas ainda não é explosão em Shorts/Reels. Usar como “repo que explodiu no GitHub antes da massa perceber”.',
        facts: '38.533 stars · 2.465 forks · 91 issues · JavaScript · push em 31 AGO · +744 stars desde 14:00 BRT',
        hook: 'Esse repo acabou de explodir no GitHub porque promete desenhar a arquitetura do seu código sozinho.',
        broll: 'GitHub top, demo oficial, README, vídeo Matheus, vídeo Codedigipt e tela de diagrama interativo.',
        links: [
          ['GitHub', 'https://github.com/tt-a1i/archify'],
          ['Demo oficial', 'https://tt-a1i.github.io/archify/'],
          ['Matheus Battisti · 20.9k views', 'https://www.youtube.com/watch?v=0NelhyQwP-w'],
          ['Codedigipt · 7.6k views', 'https://www.youtube.com/watch?v=tuOd32Qikrs'],
          ['Hyperautomation Labs · 4.4k views', 'https://www.youtube.com/watch?v=LBuU44vZPpg']
        ]
      },
      {
        rank: 2,
        title: 'Scientific Agent Skills',
        type: 'Repositório',
        score: 99,
        status: 'Gravar agora',
        since: '28-31 AGO',
        why: 'Segue extremamente forte: 40.681 stars, push hoje e narrativa mais nobre que “ferramenta de dev”: agentes especializados virando operadores de pesquisa científica. Boa pauta se o roteiro quiser parecer mais futurista e menos tutorial.',
        facts: '40.681 stars · 3.767 forks · 24 issues · Python · push em 31 AGO · +177 stars desde 14:00 BRT',
        hook: 'A IA não quer só responder perguntas. Ela quer executar ciência.',
        broll: 'GitHub top, K-Dense org, diretório de skills, demos/README e vídeos oficiais.',
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
        score: 96,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Ainda tem prova social melhor que Archify para vídeos sobre criação/edição com IA, mas o repo está menos ativo no push. Mantém utilidade como comparação direta com o fluxo Automatrix de edição automática.',
        facts: '55.012 stars · 6.865 forks · 278 issues · Python · último push 22 AGO · +69 stars desde 14:00 BRT',
        hook: 'E se um agente montasse o vídeo inteiro antes de você abrir o editor?',
        broll: 'Vídeos do canal oficial, vídeos Ray Codes/Julian Goldie, GitHub top, site OpenMontage e Trendshift.',
        links: [
          ['GitHub', 'https://github.com/calesthio/OpenMontage'],
          ['YouTube oficial · 15k+ views', 'https://www.youtube.com/watch?v=dyGjMasaZKs'],
          ['Ray Codes · 14k+ views', 'https://www.youtube.com/watch?v=FyM-0sJYIR8'],
          ['Julian Goldie · 17k+ views', 'https://www.youtube.com/watch?v=kHjROFbd7J4']
        ]
      },
      {
        rank: 4,
        title: 'Claude Memory / Agent Memory',
        type: 'Repositório + narrativa',
        score: 95,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'Tema continua forte e tecnicamente defensável: claude-mem teve push hoje e TencentDB Agent Memory segue ativo. Narrativa boa para explicar por que agentes ruins esquecem contexto.',
        facts: 'claude-mem: 92.771 stars · 8.160 forks · push 31 AGO; TencentDB Agent Memory: 25.412 stars · 2.369 forks · push 31 AGO',
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
        score: 92,
        status: 'Usar como comparação',
        since: 'mantém hype',
        why: 'Não teve push novo desde 25 AGO, então fica fora da prioridade principal. Continua valioso como peça de comparação para pesquisa web/social por agentes.',
        facts: '77.096 stars · 6.610 forks · 111 issues · Python · último push 25 AGO · +58 stars desde 14:00 BRT',
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
        status: 'Ativo, mas sem push novo',
        facts: '77.096 stars · 6.610 forks · 111 issues · último push 25 AGO',
        action: 'Rebaixado para comparação. Só volta ao topo se aparecer release, push forte ou vídeo social real.'
      },
      {
        repo: 'TencentCloud/TencentDB-Agent-Memory',
        status: 'Ativo no radar',
        facts: '25.412 stars · 2.369 forks · 754 issues · último push 31 AGO',
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
        signal: 'O Shorts enviado ficou fraco: cerca de 63 views. Vídeos úteis de prova social: Matheus Battisti 20.9k, Codedigipt 7.6k, Hyperautomation Labs 4.4k. Instagram público não trouxe prova forte nesta rodada.',
        use: 'Gancho de descoberta antecipada + B-roll visual',
        link: 'https://www.youtube.com/watch?v=0NelhyQwP-w'
      },
      {
        topic: 'Scientific Agent Skills',
        signal: 'Canal K-Dense tem vídeo oficial com 12.7k views. A força maior é repo + narrativa técnica, não viralidade social ampla.',
        use: 'Prova técnica + narrativa ciência',
        link: 'https://www.youtube.com/watch?v=ZxbnDaD_FVg'
      },
      {
        topic: 'OpenMontage',
        signal: 'Continua com melhor prova social entre os monitorados: referências públicas na faixa de 14k-17k views. Menor urgência de GitHub, maior utilidade para conteúdo visual.',
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
          <span class="daily-chip">◉ Atualização das 20:00</span>
          <h2>Radar revalidado para pauta de vídeo</h2>
        </div>
        <div class="daily-meta">
          <span>${update.stamp}</span>
          <small>${update.sensor}</small>
        </div>
      </div>

      <div class="daily-rule">
        <strong>Decisão editorial:</strong>
        Archify fica no topo por crescimento real no GitHub e B-roll claro, mas deve ser vendido como descoberta antecipada, não como assunto já viral em Reels/Shorts.
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
          <p>Views são públicas no YouTube no momento da leitura. Busca pública de Instagram/TikTok não confirmou prova forte para Archify nesta rodada.</p>
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
