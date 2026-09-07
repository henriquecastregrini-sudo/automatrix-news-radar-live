import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'data', 'radar.json');
const githubApi = 'https://api.github.com';
const githubToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
let previousData = { repos: [], news: [], trending: [] };
try {
  previousData = JSON.parse(await readFile(output, 'utf8'));
} catch {
  // First run: there is no prior snapshot to preserve.
}
const previousRepoMap = new Map((previousData.repos || []).map((repo) => [repo.repo.toLowerCase(), repo]));
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

const editorialOverrides = {
  'affaan-m/ECC': { title: 'ECC', type: 'Otimização de agentes', status: 'Gravar agora', hook: 'Este sistema promete deixar Claude, Codex e outros agentes mais rápidos, seguros e consistentes.', thesis: 'O próximo salto dos agentes pode vir do harness ao redor do modelo, não de um modelo maior.', broll: ['GitHub Trending', 'README', 'skills e memória', 'comparação de agentes'] },
  'DietrichGebert/ponytail': { title: 'Ponytail', type: 'Skill para agentes', status: 'Gravar agora', hook: 'Um repo está ensinando agentes a pensar como o desenvolvedor sênior mais preguiçoso da equipe.', thesis: 'A habilidade mais valiosa de um agente pode ser evitar código desnecessário.', broll: ['GitHub Trending', 'README', 'exemplos YAGNI', 'antes e depois do código'] },
  'blader/humanizer': { title: 'Humanizer', type: 'Escrita com IA', status: 'Gravar agora', hook: 'Este repo tenta apagar os sinais que denunciam um texto escrito por IA.', thesis: 'Quanto mais conteúdo a IA produz, mais valiosas ficam as ferramentas que devolvem voz humana.', broll: ['README', 'texto antes e depois', 'regras da skill', 'GitHub Trending'] },
  'cathrynlavery/diagram-design': { title: 'Diagram Design', type: 'Visual para agentes', status: 'Gravar agora', hook: 'Uma coleção de skills está ensinando agentes a criar diagramas editoriais sem o visual genérico de IA.', thesis: 'Design visual está virando uma habilidade reutilizável por agentes de código.', broll: ['galeria de diagramas', 'HTML e SVG', 'README', 'GitHub Trending'] },
  'anomalyco/opencode': { title: 'OpenCode', type: 'Agente de código open-source', status: 'Monitorar hoje', hook: 'O agente de código open-source que quer competir diretamente com as ferramentas fechadas.', thesis: 'A disputa por coding agents está migrando para ecossistemas abertos e executáveis localmente.', broll: ['terminal', 'README', 'demo', 'comparação com agentes fechados'] },
  'ruvnet/ruflo': { title: 'Ruflo', type: 'Orquestração multiagente', status: 'Monitorar hoje', hook: 'Este meta-harness coordena enxames de agentes, memória e fluxos autônomos no mesmo sistema.', thesis: 'O mercado está saindo do agente isolado para equipes de agentes coordenados.', broll: ['arquitetura', 'terminal', 'swarm demo', 'README'] },
  'heygen-com/hyperframes': { title: 'Hyperframes', type: 'Vídeo programável para agentes', status: 'Gravar agora', hook: 'Agora um agente pode escrever HTML e transformar esse código em um vídeo renderizado.', thesis: 'A edição de vídeo está virando uma tarefa programável e operável por agentes.', broll: ['demo oficial', 'HTML virando vídeo', 'timeline programática', 'GitHub Trending'] },
  'coreyhaines31/marketingskills': { title: 'Marketing Skills', type: 'Skills de marketing', status: 'Gravar agora', hook: 'Este repo transforma copy, SEO, CRO e analytics em habilidades reutilizáveis por agentes.', thesis: 'Times de marketing estão começando a ser empacotados como infraestrutura para agentes.', broll: ['diretório de skills', 'README', 'exemplos de copy e CRO', 'GitHub Trending'] },
  'jo-inc/camofox-browser': { title: 'CamoFox Browser', type: 'Navegador para agentes', status: 'Monitorar hoje', hook: 'Este navegador headless foi criado para agentes acessarem páginas que bloqueiam automação comum.', thesis: 'A guerra entre agentes navegadores e sistemas antibot está criando uma nova camada de infraestrutura.', broll: ['terminal', 'README', 'demo de navegação', 'comparação com Playwright'] },
};

const socialReferences = {
  'mattpocock/skills': [{ platform: 'YouTube', label: 'Matt Pocock · workflow completo · 424k views · publicado 16 JUL', url: 'https://www.youtube.com/watch?v=M6mYodf0dJM', views: 424060, publishedAt: '2026-07-16', verifiedAt: '07 SET 2026' }],
  'tt-a1i/archify': [{ platform: 'YouTube', label: 'The Next New Thing · Archify entre os repos em alta · 111k views · publicado 04 SET', url: 'https://www.youtube.com/watch?v=AWzzmrCPe-A', views: 111709, publishedAt: '2026-09-04', verifiedAt: '07 SET 2026' }],
  'NousResearch/hermes-agent': [{ platform: 'YouTube', label: 'Metics Media · tutorial completo · 225k views · publicado 31 AGO', url: 'https://www.youtube.com/watch?v=DYdvJCxWd6M', views: 225904, publishedAt: '2026-08-31', verifiedAt: '07 SET 2026' }],
  'affaan-m/ECC': [{ platform: 'YouTube', label: 'DevsKingdom · ECC Agent Harness · 1k views · publicado 27 AGO', url: 'https://www.youtube.com/watch?v=5ZgBoOBhHzo', views: 1062, publishedAt: '2026-08-27', verifiedAt: '07 SET 2026' }],
  'blader/humanizer': [{ platform: 'YouTube', label: 'Superbash · Humanizer Skill · 7,5k views · publicado 03 AGO', url: 'https://www.youtube.com/watch?v=ZCQhyS2Ad9U', views: 7482, publishedAt: '2026-08-03', verifiedAt: '07 SET 2026' }],
  'anomalyco/opencode': [{ platform: 'YouTube', label: 'Leon van Zyl · tutorial OpenCode · 208k views · publicado 05 MAI', url: 'https://www.youtube.com/watch?v=uZGDO0L-Dr4', views: 208689, publishedAt: '2026-05-05', verifiedAt: '07 SET 2026' }],
  'DietrichGebert/ponytail': [{ platform: 'YouTube', label: 'Better Stack · Ponytail escreve 94% menos código · 254k views · publicado 20 JUN', url: 'https://www.youtube.com/watch?v=2xuFcmUAQUc', views: 254926, publishedAt: '2026-06-20', verifiedAt: '07 SET 2026' }],
  'heygen-com/hyperframes': [{ platform: 'YouTube', label: 'HeyGen · fluxo de agentes com Hyperframes · 10,9k views · publicado 22 MAI', url: 'https://www.youtube.com/watch?v=9yx8Ja1gztI', views: 10925, publishedAt: '2026-05-22', verifiedAt: '07 SET 2026' }],
  'coreyhaines31/marketingskills': [{ platform: 'YouTube', label: 'The Next New Thing · skills para Claude · 53k views · publicado 11 FEV', url: 'https://www.youtube.com/watch?v=YajqB9RDdzI', views: 53347, publishedAt: '2026-02-11', verifiedAt: '07 SET 2026' }],
  'jo-inc/camofox-browser': [{ platform: 'YouTube', label: 'Build Things With AI · CamoFox entre repos em alta · 1,8k views · publicado 02 MAI', url: 'https://www.youtube.com/watch?v=Hs-xdoaGH5o', views: 1855, publishedAt: '2026-05-02', verifiedAt: '07 SET 2026' }],
  'magnitudedev/magnitude': [],
  'K-Dense-AI/scientific-agent-skills': [{ platform: 'YouTube', label: 'K-Dense · skills científicas · 13,5k views · publicado 18 FEV', url: 'https://www.youtube.com/watch?v=ZxbnDaD_FVg', views: 13534, publishedAt: '2026-02-18', verifiedAt: '07 SET 2026' }],
  'Panniantong/Agent-Reach': [{ platform: 'YouTube', label: 'Better Stack · agente com acesso web · 16k views · publicado 18 JUN', url: 'https://www.youtube.com/watch?v=aanqEqQwjNU', views: 16050, publishedAt: '2026-06-18', verifiedAt: '06 SET 2026' }],
  'TencentCloud/TencentDB-Agent-Memory': [],
};

async function getJson(url, fallback) {
  try {
    const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'automatrix-news-radar' };
    if (githubToken && url.startsWith(githubApi)) headers.Authorization = `Bearer ${githubToken}`;
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error(`${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn(`Falha em ${url}: ${error.message}`);
    return fallback;
  }
}

function previousApiFallback(repo) {
  const previous = previousRepoMap.get(repo.toLowerCase());
  if (!previous) return {};
  return {
    name: previous.title || repo.split('/')[1],
    full_name: previous.repo,
    html_url: previous.url || `https://github.com/${repo}`,
    description: previous.thesis || '',
    stargazers_count: previous.stars,
    forks_count: previous.forks,
    open_issues_count: previous.issues,
    language: previous.language,
    pushed_at: previous.pushedAt,
    topics: [],
  };
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
    // The first link can be a sponsor profile. The repository heading is the
    // only link containing the TRENDING_REPOSITORIES_PAGE marker.
    const repo = row.match(/click_target&quot;:&quot;REPOSITORY&quot;[\s\S]*?href="\/([^"/]+\/[^"/]+)"/)?.[1];
    const starsToday = Number((row.match(/([\d,]+)\s+stars today/)?.[1] || '0').replace(/,/g, ''));
    return repo && !repo.startsWith('sponsors/') ? { repo, starsToday } : null;
  }).filter(Boolean);
}

function ageLabel(date) {
  if (!date) return 'sem data';
  const hours = Math.max(0, Math.round((Date.now() - new Date(date).getTime()) / 36e5));
  return hours < 24 ? `push há ${hours}h` : `push há ${Math.round(hours / 24)}d`;
}

const trending = extractTrending(await getText('https://github.com/trending?since=daily'));
const trendingMap = new Map(trending.map((item) => [item.repo.toLowerCase(), item.starsToday]));
const coreNames = new Set(tracked.map((item) => item.repo.toLowerCase()));
const trendingDetails = await Promise.all(trending.slice(0, 12).filter((item) => !coreNames.has(item.repo.toLowerCase())).map(async (trend) => ({
  trend,
  api: await getJson(`${githubApi}/repos/${trend.repo}`, previousApiFallback(trend.repo)),
})));
const relevancePattern = /(^|\W)(ai|agent|agents|agentic|llm|mcp|claude|codex|coding|developer|devtool|automation|skill|skills|prompt|terminal|cli|software)(\W|$)/i;
const dynamicTracked = trendingDetails.filter(({ api }) => {
  const searchable = [api.name, api.description, ...(api.topics || [])].filter(Boolean).join(' ');
  return api.full_name && (previousRepoMap.has(api.full_name.toLowerCase()) || relevancePattern.test(searchable));
}).slice(0, 6).map(({ trend, api }) => ({
  repo: trend.repo,
  title: editorialOverrides[trend.repo]?.title || api.name || trend.repo.split('/')[1],
  type: editorialOverrides[trend.repo]?.type || 'Novo no GitHub Trending',
  status: editorialOverrides[trend.repo]?.status || (trend.starsToday >= 500 ? 'Gravar agora' : 'Monitorar hoje'),
  hook: editorialOverrides[trend.repo]?.hook || `Este repositório ganhou ${compact(trend.starsToday)} estrelas hoje e entrou no radar dos desenvolvedores.`,
  thesis: editorialOverrides[trend.repo]?.thesis || api.description || 'Tendência técnica recente que precisa de validação editorial.',
  broll: editorialOverrides[trend.repo]?.broll || ['GitHub Trending', 'README', 'demo oficial', 'histórico do projeto'],
  _api: api,
}));
const runTracked = [...tracked, ...dynamicTracked];
const collectedRepos = await Promise.all(runTracked.map(async (item) => {
  const api = item._api || await getJson(`${githubApi}/repos/${item.repo}`, previousApiFallback(item.repo));
  const { _api, ...editorial } = item;
  const starsToday = trendingMap.get(item.repo.toLowerCase()) || 0;
  const social = socialReferences[item.repo] || [];
  const socialViews = Math.max(0, ...social.map((reference) => reference.views || 0));
  const socialScore = social.length ? Math.min(22, 8 + Math.log10(socialViews + 1) * 2.5) : 6;
  const score = Math.min(100, Math.round(
    (starsToday ? Math.min(48, Math.log10(starsToday + 1) * 15) : 12) +
    Math.min(22, Math.log10((api.stargazers_count || 1) + 1) * 4) +
    socialScore +
    (api.pushed_at && Date.now() - new Date(api.pushed_at).getTime() < 1728e5 ? 10 : 3)
  ));
  return {
    ...editorial,
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
      { label: 'Buscar Instagram', url: `https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent((item.title || api.name || item.repo.split('/')[1]) + ' AI')}`, kind: 'busca' },
      { label: 'Buscar TikTok', url: `https://www.tiktok.com/search?q=${encodeURIComponent((item.title || api.name || item.repo.split('/')[1]) + ' AI')}`, kind: 'busca' },
    ],
  };
}));

const monitoredNames = new Set(['Panniantong/Agent-Reach', 'TencentCloud/TencentDB-Agent-Memory']);
const editorialRepos = collectedRepos
  .filter((repo) => !monitoredNames.has(repo.repo))
  .filter((repo) => repo.trendingStarsToday || (repo.pushedAt && Date.now() - new Date(repo.pushedAt).getTime() < 7 * 864e5))
  .sort((a, b) => b.score - a.score || (b.trendingStarsToday || 0) - (a.trendingStarsToday || 0) || (b.stars || 0) - (a.stars || 0))
  .slice(0, 10);
const repos = [...editorialRepos, ...collectedRepos.filter((repo) => monitoredNames.has(repo.repo))];
repos.sort((a, b) => b.score - a.score || (b.trendingStarsToday || 0) - (a.trendingStarsToday || 0) || (b.stars || 0) - (a.stars || 0));
repos.forEach((repo, index) => { repo.rank = index + 1; });

const hn = await getJson('https://hn.algolia.com/api/v1/search_by_date?query=AI%20agent&tags=story&hitsPerPage=50', { hits: [] });
const newsCutoff = Date.now() - 48 * 36e5;
const newsRelevance = /(^|\W)(ai|agent|agents|agentic|llm|mcp|model|models|github|coding|code|inference|open.?source|robot|prompt)(\W|$)/i;
const news = (hn.hits || [])
  .filter((item) => item.url || item.story_url)
  .filter((item) => new Date(item.created_at || 0).getTime() >= newsCutoff)
  .filter((item) => newsRelevance.test(item.title || item.story_title || ''))
  .sort((a, b) => ((b.points || 0) + (b.num_comments || 0) * 2) - ((a.points || 0) + (a.num_comments || 0) * 2) || new Date(b.created_at || 0) - new Date(a.created_at || 0))
  .slice(0, 6).map((item) => ({
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
