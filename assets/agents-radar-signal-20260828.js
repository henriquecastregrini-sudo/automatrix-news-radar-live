(function () {
  function injectAgentsRadar() {
    if (document.querySelector('.agents-radar-signal')) return;

    const anchor = document.querySelector('.control-panel') || document.querySelector('#ranking');
    if (!anchor) return;

    const section = document.createElement('section');
    section.className = 'agents-radar-signal';
    section.innerHTML = `
      <div class="agents-radar-head">
        <span class="eyebrow small">▣ Sensor externo</span>
        <h2>Agents Radar Signal</h2>
        <p>O agents-radar fica como motor auxiliar de coleta. O Automatrix continua sendo o painel editorial final: ele decide o que vira vídeo, gancho, B-roll e prova social.</p>
      </div>

      <div class="agents-radar-grid">
        <article>
          <small>Função no fluxo</small>
          <strong>Sensor de mercado</strong>
          <p>Coleta sinais de GitHub Trending, Hacker News, Product Hunt, ArXiv, Hugging Face, blogs oficiais e repos de agentes.</p>
        </article>
        <article>
          <small>Status local</small>
          <strong>Instalado como base</strong>
          <p>Caminho: C:\\Users\\leo\\Desktop\\AUTOMATRIX\\DESENVOLVIMENTO\\agents-radar</p>
        </article>
        <article>
          <small>Uso correto</small>
          <strong>Confirmação, não decisão</strong>
          <p>Se um assunto aparece no Agents Radar e no nosso ranking, ganha selo de sinal cruzado. Mesmo assim, a checagem final continua editorial.</p>
        </article>
      </div>

      <div class="agents-radar-links">
        <a href="https://github.com/duanyytop/agents-radar" target="_blank" rel="noreferrer">Repo original ↗</a>
        <a href="https://agents-radar-mcp.duanyytop.workers.dev" target="_blank" rel="noreferrer">MCP público ↗</a>
        <a href="https://duanyytop.github.io/agents-radar/" target="_blank" rel="noreferrer">Dashboard original ↗</a>
        <a href="https://github.com/duanyytop/agents-radar/tree/main/digests" target="_blank" rel="noreferrer">Digests ↗</a>
      </div>

      <details class="agents-radar-plan">
        <summary>Como vamos usar isso no Radar</summary>
        <ol>
          <li><b>Coletar:</b> consultar o último digest/MCP do agents-radar.</li>
          <li><b>Cruzar:</b> comparar com GitHub Trending, Trendshift e nossos tópicos atuais.</li>
          <li><b>Marcar:</b> aplicar selo “confirmado por Agents Radar” quando houver match real.</li>
          <li><b>Filtrar:</b> só entra no painel principal se tiver gancho, prova visual e link confiável.</li>
          <li><b>Produzir:</b> transformar pauta aprovada em briefing de vídeo do Lucas.</li>
        </ol>
      </details>`;

    anchor.insertAdjacentElement('beforebegin', section);
  }

  window.addEventListener('load', injectAgentsRadar);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAgentsRadar, { once: true });
  } else {
    injectAgentsRadar();
  }
  setTimeout(injectAgentsRadar, 500);
})();
