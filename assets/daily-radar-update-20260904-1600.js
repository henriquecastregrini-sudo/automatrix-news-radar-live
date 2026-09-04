(function () {
  const update = {
    stamp: '04 SET 2026 · 16:00 BRT',
    sensor: 'GitHub API ao vivo · GitHub Trending diário · YouTube público · revisão editorial Automatrix',
    decision: 'O ranking foi limpo: entram Skills e Magnitude; OpenMontage e Agent-Reach saem da prioridade de gravação por não terem sinal novo suficiente.',
    top: [
      {
        rank: 1,
        title: 'mattpocock/skills',
        type: 'Repositório · skills para agentes',
        score: 100,
        status: 'Gravar agora',
        since: 'Trending hoje',
        why: 'É o sinal mais forte desta rodada: GitHub Trending registra 2.757 estrelas hoje e há prova social grande no próprio canal. A tese é clara para Lucas: conhecimento de engenharia deixou de ser prompt solto e virou skill reutilizável para Claude Code, Codex e outros agentes.',
        facts: '249.902 stars · 21.125 forks · 463 issues · Shell · push em 04 SET · GitHub Trending: 2.757 stars hoje',
        hook: 'O jeito de programar com IA mudou: quem ainda usa só prompt está ficando para trás.',
        broll: 'GitHub Trending, README, diretório .agents, vídeo do Matt e tela de skills sendo chamadas.',
        links: [
          ['GitHub', 'https://github.com/mattpocock/skills'],
          ['GitHub Trending', 'https://github.com/trending'],
          ['Vídeo · 400k views', 'https://www.youtube.com/watch?v=M6mYodf0dJM'],
          ['Vídeo · 239k views', 'https://www.youtube.com/watch?v=A8mokin_YOs']
        ]
      },
      {
        rank: 2,
        title: 'Archify',
        type: 'Repositório · diagramas de arquitetura',
        score: 98,
        status: 'Gravar agora',
        since: 'mantém hype',
        why: 'Cresceu de 38.533 para 47.766 stars desde a última publicação do Radar. É visual, simples de explicar e tem social proof real: Better Stack, Matheus Battisti, Ray Codes e TechyTacos já fizeram vídeos com alcance público relevante.',
        facts: '47.766 stars · 3.078 forks · 110 issues · JavaScript · push em 04 SET · +9.233 stars vs. snapshot de 31 AGO',
        hook: 'Esse repo lê seu código e desenha a arquitetura inteira sozinho.',
        broll: 'Página do repo, demo oficial, mapa interativo, vídeo Better Stack e código virando diagrama.',
        links: [
          ['GitHub', 'https://github.com/tt-a1i/archify'],
          ['Demo oficial', 'https://tt-a1i.github.io/archify/'],
          ['Better Stack · 22,5k views', 'https://www.youtube.com/watch?v=iuJszJuiuSg'],
          ['Matheus Battisti · 21,3k views', 'https://www.youtube.com/watch?v=0NelhyQwP-w'],
          ['Ray Codes · 14,1k views', 'https://www.youtube.com/watch?v=ls-rDeZ7mmw']
        ]
      },
      {
        rank: 3,
        title: 'Hermes Agent',
        type: 'Agente open-source',
        score: 96,
        status: 'Gravar agora',
        since: 'Trending hoje',
        why: 'Aparece no Trending com 721 estrelas no dia e já tem tração social que os outros temas não têm. É uma narrativa de autonomia: um agente open-source que cresce com o usuário, contra a dependência de assistentes fechados.',
        facts: '241.379 stars · 49.509 forks · 39.565 issues · Python · push em 04 SET · GitHub Trending: 721 stars hoje',
        hook: 'Enquanto todo mundo usa chatbot, esse agente open-source aprende a trabalhar com você.',
        broll: 'GitHub, interface/terminal do Hermes, exemplos de automação e tutorial visual.',
        links: [
          ['GitHub', 'https://github.com/NousResearch/hermes-agent'],
          ['Vídeo explicativo · 229k views', 'https://www.youtube.com/watch?v=9GpWELm3_XI'],
          ['Tutorial · 179k views', 'https://www.youtube.com/watch?v=DYdvJCxWd6M']
        ]
      },
      {
        rank: 4,
        title: 'Magnitude',
        type: 'Ferramenta · inferência local',
        score: 91,
        status: 'Monitorar hoje',
        since: 'Trending hoje',
        why: 'Repo menor, mas com narrativa muito forte para Automatrix: servidor open-source de inferência local que liga modelos ao agente que você já usa. Ainda precisa de mais prova social direta, então entra como descoberta antecipada e não como pauta principal.',
        facts: '2.306 stars · 162 forks · 16 issues · TypeScript · push em 04 SET · GitHub Trending: 395 stars hoje',
        hook: 'A corrida da IA pode estar saindo da nuvem e voltando para o seu próprio hardware.',
        broll: 'README, hardware/local setup, terminal, benchmark e fluxos com Codex/Claude Code.',
        links: [
          ['GitHub', 'https://github.com/magnitudedev/magnitude'],
          ['GitHub Trending', 'https://github.com/trending'],
          ['Busca YouTube', 'https://www.youtube.com/results?search_query=magnitude+local+AI+inference+server']
        ]
      },
      {
        rank: 5,
        title: 'Scientific Agent Skills',
        type: 'Repositório · agentes científicos',
        score: 88,
        status: 'Usar como comparação',
        since: 'mantém hype',
        why: 'O crescimento continua e o repo segue bem mantido, mas o sinal social ainda é mais técnico do que popular. Funciona melhor como comparação no vídeo de skills ou como pauta futurista para público que já acompanha agentes.',
        facts: '42.591 stars · 3.894 forks · 31 issues · Python · push em 02 SET · +1.910 stars vs. snapshot de 31 AGO',
        hook: 'A próxima geração de cientistas talvez não seja humana — seja uma coleção de skills.',
        broll: 'Repo, diretório de skills, página K-Dense e demonstrações científicas.',
        links: [
          ['GitHub', 'https://github.com/K-Dense-AI/scientific-agent-skills'],
          ['K-Dense · 13,2k views', 'https://www.youtube.com/watch?v=ZxbnDaD_FVg'],
          ['Busca YouTube', 'https://www.youtube.com/results?search_query=scientific+agent+skills+K-Dense']
        ]
      }
    ],
    monitored: [
      { repo: 'Panniantong/Agent-Reach', status: 'Ativo, rebaixado', facts: '78.000 stars · 6.716 forks · 121 issues · último push 01 SET', action: 'Sem novo sinal social forte. Manter apenas como comparação de agente com acesso à web.' },
      { repo: 'TencentCloud/TencentDB-Agent-Memory', status: 'Ativo', facts: '25.922 stars · 2.418 forks · 776 issues · push em 03 SET', action: 'Monitorar por novidade de memória/compartilhamento de contexto; não gravar antes dos quatro primeiros.' },
      { repo: 'duanyytop/agents-radar', status: 'Sensor auxiliar', facts: '1.043 stars · 203 forks · 151 issues · push em 04 SET', action: 'Mantido como fonte de apoio. O ranking final continua validado por métricas e links públicos.' }
    ],
    social: [
      { topic: 'Skills para agentes', signal: 'Prova social forte e específica: vídeos do Matt Pocock com cerca de 400k e 239k views. O assunto não é só hype de repo; já virou narrativa de workflow para devs.', use: 'Gancho + prova social + B-roll', link: 'https://www.youtube.com/watch?v=M6mYodf0dJM' },
      { topic: 'Archify', signal: 'Prova social média/forte e visual: Better Stack ~22,5k, Matheus ~21,3k, Ray Codes ~14,1k e TechyTacos ~17,3k views na leitura pública. Bom para vídeo agora.', use: 'B-roll visual + tutorial', link: 'https://www.youtube.com/watch?v=iuJszJuiuSg' },
      { topic: 'Hermes Agent', signal: 'Prova social forte: um explicativo com ~229k views e um tutorial com ~179k. O tema já tem conversa além do GitHub.', use: 'Narrativa open-source + demonstração', link: 'https://www.youtube.com/watch?v=9GpWELm3_XI' },
      { topic: 'Magnitude', signal: 'Sinal GitHub é forte, mas a busca pública não mostrou vídeo direto com alcance alto. Tratar como descoberta antecipada; não inventar viralidade social.', use: 'Monitorar e capturar demo', link: 'https://www.youtube.com/results?search_query=magnitude+local+AI+inference+server' }
    ],
    official: [
      ['GitHub Trending', 'https://github.com/trending'],
      ['Trendshift', 'https://trendshift.io/'],
      ['agents-radar', 'https://github.com/duanyytop/agents-radar'],
      ['mattpocock/skills', 'https://github.com/mattpocock/skills'],
      ['Archify', 'https://github.com/tt-a1i/archify'],
      ['Hermes Agent', 'https://github.com/NousResearch/hermes-agent'],
      ['Magnitude', 'https://github.com/magnitudedev/magnitude']
    ]
  };

  function links(items) { return items.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label} ↗</a>`).join(''); }
  function inject() {
    document.querySelectorAll('.daily-radar-update').forEach((node) => node.remove());
    const anchor = document.querySelector('.agents-radar-signal') || document.querySelector('#ranking') || document.querySelector('.control-panel') || document.querySelector('main') || document.body;
    const section = document.createElement('section');
    section.className = 'daily-radar-update';
    section.innerHTML = `
      <div class="daily-radar-header"><div><span class="daily-chip">◉ Atualização completa</span><h2>Radar revalidado para pauta de vídeo</h2></div><div class="daily-meta"><span>${update.stamp}</span><small>${update.sensor}</small></div></div>
      <div class="daily-rule"><strong>Decisão editorial:</strong> ${update.decision}</div>
      <div class="daily-ranking">${update.top.map((item) => `<article class="daily-card"><div class="daily-card-top"><span class="daily-rank">#${item.rank}</span><div><h3>${item.title}</h3><p>${item.type} · ${item.since}</p></div><div class="daily-score" title="Score editorial, não métrica factual"><i style="--score:${item.score}%"></i><b>${item.score}</b></div></div><div class="daily-status">${item.status}</div><p class="daily-why">${item.why}</p><div class="daily-facts">${item.facts}</div><div class="daily-hook">Gancho: ${item.hook}</div><div class="daily-facts">B-roll/prova: ${item.broll}</div><div class="daily-links">${links(item.links)}</div></article>`).join('')}</div>
      <div class="daily-social"><div><span class="daily-chip">▣ Repos monitorados</span><h3>Status factual</h3><p>Métricas puxadas nesta execução via GitHub API. O score é editorial e não substitui os números reais.</p></div><div class="daily-social-list">${update.monitored.map((item) => `<article><strong>${item.repo}</strong><span>${item.status}</span><p>${item.facts}</p><p>${item.action}</p></article>`).join('')}</div></div>
      <div class="daily-social"><div><span class="daily-chip">▣ Social Signals</span><h3>Vídeos verificados</h3><p>Views são públicas no YouTube no momento da leitura. Onde não há prova social direta, o Radar marca monitorar — sem inventar alcance.</p></div><div class="daily-social-list">${update.social.map((item) => `<article><strong>${item.topic}</strong><span>${item.use}</span><p>${item.signal}</p><a href="${item.link}" target="_blank" rel="noreferrer">abrir referência ↗</a></article>`).join('')}</div></div>
      <div class="daily-sources"><span>Fontes verificadas nesta execução</span>${links(update.official)}</div>`;
    anchor.insertAdjacentElement('beforebegin', section);
    document.querySelectorAll('body *').forEach((el) => { const text = (el.textContent || '').trim(); if (text.includes('Última atualização') && text.length < 140) el.textContent = `◉ Última atualização: ${update.stamp}`; });
  }
  window.addEventListener('load', inject);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject, { once: true }); else inject();
  setTimeout(inject, 500);
})();
