import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'data', 'radar.json');
const githubApi = 'https://api.github.com';
const today = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo', dateStyle: 'medium', timeStyle: 'short', hour12: false,
}).format(new Date()).replace(',', ' ·');

const tracked = [
  { repo: 'mattpocock/skills', title: 'Skills para agentes', type: 'Skills para agentes', status: 'Gravar agora', hook: 'O jeito de programar com IA mudou: quem ainda usa só prompt está ficando para trás.', thesis: 'Conhecimento de engenharia virou infraestrutura reutilizável para agentes.', broll: ['README', 'diretório .agents', 'GitHub Trending', 'vídeo do criador'] },
  { repo: 'tt-a1i/archify', type: 'Ferramenta visual para dev', status: 'Gravar agora', hook: 'Esse repo lê seu código e desenha a arquitetura inteira sozinho.', thesis: 'A IA deixa de explicar código e passa a torná-lo visual.', broll: ['demo oficial', 'mapa interativo', 'README', 'código virando diagrama'] },
  { repo: 'NousResearch/hermes-agent', title: 'Hermes Agent', type: 'Agente open-source', status: 'Gravar agora', hook: 'Enquanto todo mundo usa chatbot, esse agente open-source aprende a trabalhar com você.', thesis: 'Agentes autônomos abertos desafiam o assistente fechado.', broll: ['GitHub', 'terminal', 'tutorial', 'exemplos de automação'] },
  { repo: 'magnitudedev/magnitude', type: 'Inferência local', status: 'Monitorar hoje', hook: 'A corrida da IA pode estar saindo da nuvem e voltando para o seu próprio hardware.', thesis: 'Modelos locais + agente próprio diminuem a dependência de cloud.', broll: ['README', 'hardware', 'terminal', 'benchmark'] },
  { repo: 'K-Dense-AI/scientific-agent-skills', type: 'Agentes científicos', status: 'Usar como comparação', hook: 'A próxima geração de cientistas talvez seja uma coleção de skills.', thesis: 'Skills especializadas transformam agentes em operadores de pesquisa.', broll: ['diretório de skills', 'K-Dense', 'paper', 'demo'] },
  { repo: 'Panniantong/Agent-Reach', type: 'Repo monitorado', status: 'Monitorar hoje', hook: 'O agente que não navega está cego.', thesis: 'Agentes com acesso à web ampliam pesquisa e automação.', broll: ['README', 'lista de plataformas', 'exemplos web'] },
  { repo: 'TencentCloud/TencentDB-Agent-Memory', type: 'Memória de agentes', status: 'Usar como comparação', hook: 'O próximo salto dos agentes não é pensar mais. É lembrar melhor.', thesis: 'Memória compartilhada é a camada que torna agentes úteis por mais tempo.', broll: ['README', 'arquitetura de memória', 'code graph'] },
];

const socialReferences = {
  'mattpocock/skills': [{ platform: 'YouTube', label: 'Matt Pocock · workflow de skills · 400k views', url: 'https://www.youtube.com/watch?v=M6mYodf0dJM', verifiedAt: '04 SET 2026' }],
  'tt-a1i/archify': [{ platform: 'YouTube', label: 'Better Stack · arquitetura com Claude · 22k views', url: 'https://www.youtube.com/watch?v=iuJszJuiuSg', verifiedAt: '04 SET 2026' }],
  'NousResearch/hermes-agent': [{ platform: 'YouTube', label: 'CodeHead · Hermes explicado · 229k views', url: 'https://www.youtube.com/watch?v=9GpWELm3_XI', verifiedAt: '04 SET 2026' }],
  'magnitudedev/magnitude': [],
  'K-Dense-AI/scientific-agent-skills': [{ platform: 'YouTube', label: 'K-Dense · skills científicas · 13k views', url: 'https://www.youtube.com/watch?v=ZxbnDaD_FVg', verifiedAt: '04 SET 2026' }],
  'Panniantong/Agent-Reach': [{ platform: 'YouTube', label: 'Better Stack · agente com acesso web · 15k views', url: 'https://www.youtube.com/watch?v=aanqEqQwjNU', verifiedAt: '04 SET 2026' }],
  'TencentCloud/TencentDB-Agent-Memory': [],
};

async function getJson(url, fallback) {
  try {
    const response = await fetch(url, { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'automatrix-news-radar' } });
    if (!response.ok) throw new Error(`${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn(`Falha em ${url}: ${error.message}`);
    return fallback;
  }
}

async function getText(url, fallback = '') {
  try {
    const response = await fetch(url, { headers: { 'User-Agent': 'automatrix-news-radar' } });
    if (!response.ok) throw new Error(`${response.status}`);
    return await response.text();
  } catch (error) {
    console.warn(`Falha em ${url}: ${error.message}`);
    return fallback;
  }
}

function compact(number) {
  return new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 }).format(number || 0);
}

function extractTrending(html) {
  const rows = html.match(/<article class="Box-row">[\s\S]*?<\/article>/g) || [];
  return rows.map((row) => {
    const repo = row.match(/href="\/([^"/]+\/[^"/]+)"/)?.[1];
    const starsToday = Number((row.match(/Built by\s+([\d,]+)\s+stars today/)?.[1] || '0').replace(',', ''));
    return repo ? { repo, starsToday } : null;
  }).filter(Boolean);
}

function ageLabel(date) {
  if (!date) return 'sem data';
  const hours = Math.max(0, Math.round((Date.now() - new Date(date).getTime()) / 36e5));
  return hours < 24 ? `push há ${hours}h` : `push há ${Math.round(hours / 24)}d`;
}

const trending = extractTrending(await getText('https://github.com/trending?since=daily'));
const trendingMap = new Map(trending.map((item) => [item.repo.toLowerCase(), item.starsToday]));
const repos = await Promise.all(tracked.map(async (item) => {
  const api = await getJson(`${githubApi}/repos/${item.repo}`, {});
  const starsToday = trendingMap.get(item.repo.toLowerCase()) || 0;
  const social = socialReferences[item.repo] || [];
  const score = Math.min(100, Math.round(
    (starsToday ? Math.min(48, Math.log10(starsToday + 1) * 15) : 12) +
    Math.min(22, Math.log10((api.stargazers_count || 1) + 1) * 4) +
    (social.length ? 22 : 6) +
    (api.pushed_at && Date.now() - new Date(api.pushed_at).getTime() < 1728e5 ? 10 : 3)
  ));
  return {
    ...item,
    title: item.title || api.name || item.repo.split('/')[1],
    url: api.html_url || `https://github.com/${item.repo}`,
    stars: api.stargazers_count || null,
    forks: api.forks_count || null,
    issues: api.open_issues_count || null,
    language: api.language || '—',
    pushedAt: api.pushed_at || null,
    pushedLabel: ageLabel(api.pushed_at),
    trendingStarsToday: starsToday || null,
    score,
    social,
    socialStatus: social.length ? 'referência direta verificada' : 'sem post direto verificado — precisa varredura social',
    sources: [
      { label: 'GitHub', url: api.html_url || `https://github.com/${item.repo}`, kind: 'oficial' },
      ...(starsToday ? [{ label: `GitHub Trending · ${compact(starsToday)} stars hoje`, url: 'https://github.com/trending', kind: 'tendência' }] : []),
      ...social.map(({ label, url, platform }) => ({ label: `${platform} · ${label}`, url, kind: 'social' })),
      { label: 'Buscar YouTube', url: `https://www.youtube.com/results?search_query=${encodeURIComponent(item.repo.replace('/', ' ') + ' AI')}`, kind: 'busca' },
      { label: 'Buscar Instagram', url: `https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent(item.title)}`, kind: 'busca' },
      { label: 'Buscar TikTok', url: `https://www.tiktok.com/search?q=${encodeURIComponent(item.title + ' AI')}`, kind: 'busca' },
    ],
  };
}));

repos.sort((a, b) => b.score - a.score || (b.stars || 0) - (a.stars || 0));
repos.forEach((repo, index) => { repo.rank = index + 1; });

const hn = await getJson('https://hn.algolia.com/api/v1/search_by_date?query=AI%20agent&tags=story&hitsPerPage=8', { hits: [] });
const news = (hn.hits || []).filter((item) => item.url || item.story_url).slice(0, 6).map((item) => ({
  title: item.title || item.story_title,
  url: item.url || item.story_url || `https://news.ycombinator.com/item?id=${item.objectID}`,
  points: item.points ?? null,
  comments: item.num_comments ?? null,
  publishedAt: item.created_at || null,
  source: 'Hacker News / Algolia',
}));

const data = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  generatedLabel: today,
  dataPolicy: 'Métricas GitHub e Hacker News são factuais quando a fonte responde. Score é editorial. Posts sociais entram com link direto e métrica pública verificada; buscas não são prova social.',
  sources: [
    { name: 'GitHub API', url: 'https://docs.github.com/rest', status: 'ativo' },
    { name: 'GitHub Trending', url: 'https://github.com/trending', status: 'ativo' },
    { name: 'Hacker News / Algolia', url: 'https://hn.algolia.com', status: 'ativo' },
    { name: 'Trendshift', url: 'https://trendshift.io/', status: 'verificação manual' },
    { name: 'YouTube / Instagram / TikTok', url: 'https://www.youtube.com/', status: 'links diretos ou busca; métricas exigem post público verificável' },
  ],
  repos,
  news,
  trending: trending.slice(0, 12),
  monitored: repos.filter((repo) => ['Panniantong/Agent-Reach', 'TencentCloud/TencentDB-Agent-Memory'].includes(repo.repo)),
};

await mkdir(dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(`Radar coletado: ${repos.length} repos · ${news.length} notícias · ${today}`);
