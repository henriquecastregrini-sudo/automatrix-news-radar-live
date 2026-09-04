(function () {
  const stamp = '04 SET 2026 · 20:00 BRT';
  const replacements = [
    ['249.902 stars', '250.271 stars'], ['21.125 forks', '21.150 forks'], ['463 issues', '464 issues'],
    ['47.766 stars', '48.004 stars'], ['3.078 forks', '3.099 forks'], ['110 issues', '112 issues'], ['+9.233 stars vs. snapshot de 31 AGO', '+9.471 stars vs. snapshot de 31 AGO'],
    ['241.379 stars', '241.458 stars'], ['49.509 forks', '49.547 forks'], ['39.565 issues', '39.675 issues'],
    ['2.306 stars', '2.436 stars'], ['162 forks', '172 forks'], ['16 issues', '19 issues'],
    ['42.591 stars', '42.623 stars'], ['3.894 forks', '3.899 forks'],
    ['78.000 stars', '78.024 stars'], ['6.716 forks', '6.720 forks'], ['121 issues', '122 issues'],
    ['25.922 stars', '25.922 stars'], ['1.043 stars', '1.044 stars']
  ];

  function recheck() {
    const root = document.querySelector('.daily-radar-update');
    if (!root) return;
    let html = root.innerHTML;
    replacements.forEach(([from, to]) => { html = html.split(from).join(to); });
    root.innerHTML = html;
    const rule = root.querySelector('.daily-rule');
    if (rule) rule.innerHTML = '<strong>Revalidação noturna:</strong> Skills continua líder do Trending; Archify rompeu 48 mil stars; Magnitude subiu de 2.306 para 2.436 stars desde a rodada da tarde. Ranking mantido porque os sinais continuam ativos.';
    document.querySelectorAll('body *').forEach((el) => {
      const text = (el.textContent || '').trim();
      if (text.includes('Última atualização') && text.length < 140) el.textContent = `◉ Última atualização: ${stamp}`;
    });
    const meta = root.querySelector('.daily-meta span');
    if (meta) meta.textContent = stamp;
  }
  window.addEventListener('load', () => setTimeout(recheck, 900));
  setTimeout(recheck, 1300);
})();
