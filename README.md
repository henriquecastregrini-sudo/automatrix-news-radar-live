# Automatrix News Radar

Painel editorial para decidir pautas de vídeo sobre IA, dev, agentes e repositórios.

## Fonte única

O site lê somente `data/radar.json`. Isso evita a divergência anterior em que a capa mostrava uma pauta velha e blocos inseridos depois mostravam outra.

## Coleta

```powershell
npm run collect
```

O coletor normaliza:

- GitHub API: stars, forks, issues, linguagem e último push;
- GitHub Trending: stars ganhas no dia quando disponíveis;
- Hacker News/Algolia: notícias e discussões recentes;
- Social: apenas links diretos verificados entram como prova social. Sem vídeo/reel específico com métrica pública, o item aparece como `precisa varredura social`.

O score é editorial; nunca é apresentado como crescimento factual de estrelas.

## Atualização automática

`.github/workflows/radar-refresh.yml` executa às 08:00, 14:00 e 20:00 no fuso de São Paulo (11:00, 17:00 e 23:00 UTC). Ele atualiza `data/radar.json`, faz commit somente quando há mudança e o GitHub Pages publica a nova versão.

## Limitação transparente de redes sociais

Instagram, TikTok e X não expõem um feed público confiável e completo sem login/API apropriada. Por isso, este radar não inventa alcance social. A automação lista buscas e o processo editorial adiciona links diretos somente depois de verificar o post. Para ampliar essa camada no futuro, conecte uma fonte autorizada de social listening/Apify e grave os resultados normalizados no mesmo `data/radar.json`.
