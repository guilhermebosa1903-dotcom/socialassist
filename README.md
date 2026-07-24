# Rede Integrada — Curitiba

Landing page (Vite + React) apresentando um conceito de rastreamento de
protocolo entre FAS, CRAS, CREA-PR, Receita Federal e Polícia Federal em
Curitiba/PR, com mapa interativo (Leaflet/OpenStreetMap) das unidades.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview   # para conferir o build localmente
```

Os arquivos finais são gerados em `dist/`.

## Subir para o GitHub

```bash
git init
git add .
git commit -m "Landing page: Rede Integrada Curitiba"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub.
2. Clique em **Add New → Project** e selecione o repositório que você acabou
   de subir.
3. A Vercel detecta automaticamente que é um projeto Vite. Confirme:
   - **Build Command:** `npm run build` (ou `vite build`)
   - **Output Directory:** `dist`
4. Clique em **Deploy**. Em cerca de um minuto o site estará no ar em uma URL
   `.vercel.app`, e você pode depois apontar um domínio próprio em
   **Settings → Domains**.

Qualquer novo `git push` na branch `main` gera automaticamente um novo deploy.

## O que ajustar antes de um uso institucional real

- **Coordenadas do mapa:** as latitudes/longitudes em
  `src/data/institutions.js` foram estimadas a partir dos endereços públicos
  de cada órgão. Para uso operacional, confirme a geolocalização exata (por
  exemplo, com a Google Geocoding API ou o Nominatim do OpenStreetMap).
- **Selos do rodapé:** os selos exibidos em `src/components/Footer.jsx` são
  monogramas próprios do projeto, criados para não reproduzir marcas oficiais
  sem autorização. Substitua pelos logotipos oficiais de cada órgão (em SVG
  ou PNG, dentro de `public/`) quando tiver a autorização de uso de cada um.
- **Conteúdo institucional:** os textos descrevem um conceito de produto;
  revise com cada órgão parceiro antes de publicar como comunicação oficial.

## Estrutura do projeto

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── institutions.js
    ├── hooks/
    │   └── useScrollReveal.js
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── HowItWorks.jsx
        ├── MapSection.jsx
        ├── AboutProject.jsx
        ├── Governance.jsx
        └── Footer.jsx
```
