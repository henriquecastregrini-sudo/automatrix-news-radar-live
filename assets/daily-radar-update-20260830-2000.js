(function () {
  const update = {
    stamp: '31 AGO 2026 · 01:25 BRT',
    sensor: 'GitHub API ao vivo + busca pública + agents-radar local como sensor auxiliar',
    top: [
      {
        rank: 1,
        title: 'Archify',
        type: 'Repositório',
        score: 100,
        status: 'Gravar agora',
        since: '30-31 AGO',
        why: 'Continua acelerando no mesmo dia e tem o melhor pacote para vídeo curto: antes/depois visual, demo oficial, arquitetura animada e promessa simples de entender.',
        facts: '35.408 stars · 2.264 forks · JavaScript · push em 30 AGO · métrica verificada via GitHub API',
        hook: 'Esse repo transforma arquitetura de software em vídeo explicável.',
        broll: 'GitHub top, demo oficial, galeria/proof, tela de renderização HTML/SVG.',
        links: [
          ['GitHub', 'https://github.com/tt-a1i/archify'],
          ['Demo oficial', 'https://tt-a1i.github.io/archify/'],
          ['Artigo recente', 'https://www.coddykit.com/pages/blog-detail?id=513039&slug=archify-the-open-source-ai-agent-skill-with-32-500-github-stars-that-turns-code-'],
          ['LinkedIn referência', 'https://www.linkedin.com/posts/priyanshu-r-b08427271_github-tt-a1iarchify-agent-skill-for-activity-7499339388737265664-3EOb']
        ]
      },
      {
        rank: 2,
        title: 'Scientific Agent Skills',
        type: 'Repositório',
        score: 99,
        status: 'Gravar agora',
        since: '28-30 AGO',
        why: 'Mantém hype com crescimento real e mudança de narrativa: skills científicas deixam agentes menos genéricos e mais úteis em pesquisa verificável.',
        facts: '39.572 stars · 3.682 forks · Python · push em 29 AGO · métrica verificada via GitHub API',
        hook: 'A IA não quer só responder perguntas. Ela quer fazer ciência.',
        broll: 'GitHub top, diretório de skills, página K-Dense, prova de 190k cientistas citada no README.',
        links: [
          ['GitHub', 'https://github.com/K-Dense-AI/scientific-agent-skills'],
          ['K-Dense org', 'https://github.com/K-Dense-AI'],
          ['Skill directory', 'https://agenticskills.io/skills/claude-scientific-skills'],
          ['Star history', 'https://www.star-history.com/k-dense-ai/scientific-agent-skills']
        ]
      },
      {
        rank: 3,
        title: 'Claude Memory / Contexto persistente',
        type: 'Repositório + notícia',
        score: 97,
        status: 'Monitorar hoje',
        since: 'mantém hype',
        why: 'A tese ganhou força porque memória persistente virou assunto de produto e também dor prática de agentes. Bom para vídeo comparando “agente que esquece” versus “agente que aprende”.',
        facts: 'claude-mem: 92.660 stars · 8.155 forks · JavaScript · push em 30 AGO · valor mantido no snapshot anterior; revalidar antes de publicar',
        hook: 'O próximo salto dos agentes não é pensar mais. É lembrar melhor.',
        broll: 'README do claude-mem, fluxo de contexto, notícia sobre agentes persistentes, comparação com TencentDB Agent Memory.',
        links: [
          ['claude-mem', 'https://github.com/thedotmack/claude-mem'],
          ['Claude Directory', 'https://claudedirectory.org/plugins/claude-mem'],
          ['Wired: persistent agent', 'https://www.wired.com/story/openai-is-developing-a-persistent-ai-agent'],
          ['TencentDB Agent Memory', 'https://github.com/TencentCloud/TencentDB-Agent-Memory']
        ]
      },
      {
        rank: 4,
        title: 'Agent-Reach',
        type: 'Repo monitorado',
        score: 94,
        status: 'Usar como comparação',
        since: 'mantém hype',
        why: 'Segue como referência do tema “agente com olhos”. Não teve push novo hoje, mas ainda ganhou stars e permanece útil para comparar pesquisa web/social dentro de agentes.',
        facts: '76.767 stars · 6.573 forks · Python · push em 25 AGO · valor mantido no snapshot anterior; revalidar antes de publicar',
        hook: 'O agente que não navega está cego.',
        broll: 'README, lista de plataformas suportadas, exemplos de YouTube/GitHub/Reddit/X.',
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
        why: 'Não é o repo mais novo da lista, mas segue relevante porque o Trendshift ainda indexa o projeto e a tese conversa diretamente com produção de vídeos por agentes.',
        facts: '54.700 stars · 6.813 forks · Python · último push em 22 AGO · métrica verificada via GitHub API',
        hook: 'E se um agente montasse o vídeo inteiro antes de você abrir o editor?',
        broll: 'GitHub top, página OpenMontage, Trendshift, pipeline de vídeo e issues/tutoriais.',
        links: [
          ['GitHub', 'https://github.com/calesthio/OpenMontage'],
          ['Trendshift', 'https://trendshift.io/repositories/24682'],
          ['Site', 'https://www.openmontage.video/'],
          ['Guia externo', 'https://www.scriptbyai.com/open-ai-video-production-agent/']
        ]
      }
    ],
    monitored: [
      {
        repo: 'Panniantong/Agent-Reach',
        status: 'Ativo no radar',
        facts: '76.767 stars · 6.573 forks · 110 issues · último push 25 AGO · snapshot mantido; revalidar antes de publicar',
        action: 'Usar como comparativo em pautas de agente navegando internet e social listening.'
      },
      {
        repo: 'TencentCloud/TencentDB-Agent-Memory',
        status: 'Ativo no radar',
        facts: '25.270 stars · 2.358 forks · 752 issues · último push 27 AGO · snapshot mantido; revalidar antes de publicar',
        action: 'Usar em pauta de memória compartilhada, LLM-Wiki, code graph e governança de contexto.'
      },
      {
        repo: 'duanyytop/agents-radar',
        status: 'Sensor de apoio',
        facts: '1.028 stars · 196 forks · último push 30 AGO · digest local mais recente disponível: 28 AGO',
        action: 'Continuar como fonte auxiliar; o painel Automatrix mantém decisão editorial.'
      }
    ],
    social: [
      {
        topic: 'Archify',
        signal: 'Tem artigo recente indexado hoje e menção social pública. Antes de citar views, abrir post específico e verificar números visíveis.',
        use: 'Gancho + B-roll visual',
        link: 'https://www.youtube.com/results?search_query=archify+ai+architecture+diagram+github'
      },
      {
        topic: 'Scientific Agent Skills',
        signal: 'Páginas oficiais e diretórios mostram atualização recente; procurar vídeos curtos com “AI scientist / agent skills”.',
        use: 'Prova técnica + narrativa ciência',
        link: 'https://www.youtube.com/results?search_query=scientific+agent+skills+AI+scientist+github'
      },
      {
        topic: 'Claude Memory',
        signal: 'Tema reforçado por notícia recente sobre agente persistente. Separar fato de produto ainda não lançado de repo open-source já disponível.',
        use: 'Comparação e tese de futuro',
        link: 'https://www.youtube.com/results?search_query=claude+mem+persistent+context+agent'
      }
    ],
    official: [
      ['GitHub Trending', 'https://github.com/trending'],
      ['agents-radar', 'https://github.com/duanyytop/agents-radar'],
      ['Product Hunt AI', 'https://www.producthunt.com/topics/artificial-intelligence'],
      ['Hacker News', 'https://news.ycombinator.com/'],
      ['Archify demo', 'https://tt-a1i.github.io/archify/'],
      ['Trendshift OpenMontage', 'https://trendshift.io/repositories/24682']
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
          <span class="daily-chip">◉ Atualização das 01:25</span>
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
