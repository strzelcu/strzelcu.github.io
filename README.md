# Programista na wsi

Personal website and blog of Tomasz Strzelecki, available exclusively at **[https://strzelcu.github.io](https://strzelcu.github.io/)** and hosted on GitHub Pages. The site uses Next.js 16, React 19, Tailwind CSS 4, and Contentlayer2.

## Pages and projects

- [Blog](https://strzelcu.github.io/blog): MDX posts, tags, and search.
- [Projects](https://strzelcu.github.io/projects): the “Programista na Wsi” YouTube channel, with a YouTube badge on its artwork, and [Szczedrzyk Dash](https://strzelcu.github.io/szczedrzyk/), a local weather and environmental dashboard with a generated cover illustration.
- [O mnie](https://strzelcu.github.io/about): a short biography, GitHub profile photo, the title “Macro Data Refiner”, and contact links. No workplace is displayed.
- [CV](https://strzelcu.github.io/resume/): a separate site maintained in the [resume repository](https://github.com/strzelcu/resume). The About page links to it and states that I am not currently looking for work.

Contact: [mlody_analog3f@icloud.com](mailto:mlody_analog3f@icloud.com).

The blog lives in the root of `strzelcu.github.io`. The `/resume/` and `/szczedrzyk/` sites are published independently from their own repositories.

## Development and editing

Use Node.js **24 LTS** (`.nvmrc`) and Yarn **4.18.1**, pinned by the `packageManager` field in `package.json`:

```sh
corepack enable
yarn install --immutable
yarn dev
```

Open `http://localhost:3000`. To verify a production export:

```sh
yarn lint
EXPORT=1 UNOPTIMIZED=1 yarn build
yarn tsc --noEmit
```

- `data/blog/`: MDX blog posts; frontmatter requires `title` and `date`.
- `data/authors/default.mdx`: profile and biography; `layouts/AuthorLayout.tsx`: CV link and availability.
- `data/siteMetadata.js`, `data/headerNavLinks.ts`, `data/projectsData.ts`: site settings, navigation and projects.
- `app/`, `components/`, `layouts/`: routes and interface; `css/`: styles; `public/static/`: images.
- `contentlayer.config.ts`: content schema, MDX processing, generated search index and tag counts.
- `scripts/`: RSS generation after building.

Search uses kbar; comments use Giscus. Umami optionally reads `NEXT_UMAMI_ID`. Newsletter integration is disabled; static GitHub Pages hosting cannot run a POST handler. `.env.example` lists optional inherited integrations.

## Deployment and updates

`.github/workflows/pages.yml` builds and deploys on pushes to `main` or a manual run. It uses Node.js 24, immutable Yarn installation, and `EXPORT=1`, `UNOPTIMIZED=1`, plus the GitHub Pages `BASE_PATH`. The resulting `out/` directory is published as static files. In the repository's GitHub Pages settings, the source is **GitHub Actions**. No custom domain is configured; the production URL is `https://strzelcu.github.io`, with an empty root base path. `siteUrl` and `siteRepo` in `data/siteMetadata.js` point to that URL and this repository. The legacy `_config.yml` is not used by this Next.js workflow. Webpack is selected explicitly for Contentlayer and SVG-loader compatibility with Next.js 16. ESLint runs separately because Next.js no longer provides `next lint`.

Direct versions are pinned in `package.json`; `yarn.lock` records the complete resolved graph. Run `yarn up <package>@latest`, check peer requirements, then lint, type-check and rebuild before committing both files. ESLint **9.39.5** and TypeScript **6.0.3** are the newest releases in the ranges supported by the current lint integrations; ESLint 10 and TypeScript 7 are excluded. Pliny's optional Algolia/DocSearch integration still declares older React peer ranges; the site uses kbar instead.

## References: tools and authors

Versions were checked against official npm metadata and GitHub releases on **2026-10-17**. Stable releases are preferred, subject to the compatibility limits above. `body-scroll-lock` still publishes `4.0.0-beta.0` as its official `latest` version.

### Source material and services

| Source                                                                                                                                      | Version / reference                                                                                   | Authors / maintainers                                                              | Use                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Tailwind Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)                                                     | Custom adaptation; application dependencies updated independently                                     | Timothy Lin and contributors                                                       | Original blog scaffold                                                                                                                                           |
| [Simple Icons](https://github.com/simple-icons/simple-icons)                                                                                | 16.35.0                                                                                               | Simple Icons contributors; originally Dan Leech                                    | Social SVG paths; LinkedIn and legacy Twitter are retained inherited assets because current upstream no longer ships them; Mail is an inherited generic envelope |
| [Heroicons](https://github.com/tailwindlabs/heroicons)                                                                                      | v2.2.0, current 20px solid link path verified                                                         | Steve Schoger, Adam Wathan and Tailwind Labs contributors                          | Heading anchor icon                                                                                                                                              |
| [Night Owl / Prism themes](https://github.com/PrismJS/prism-themes)                                                                         | [447479fc7b2b](https://github.com/PrismJS/prism-themes/tree/447479fc7b2be2051fe27e561aceed7cc87a589f) | Sarah Drasner; port by Sara Vieira; contribution by Souvik Mandal                  | Adapted code token colours; local layout utilities are preserved                                                                                                 |
| [Tailwind CSS theme reference](https://tailwindcss.com/docs/theme)                                                                          | Tailwind CSS 4.3.3                                                                                    | Adam Wathan, Jonathan Reinink, Steve Schoger, Simon Vrachliotis and contributors   | Theme variables and styling                                                                                                                                      |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)                                                                            | Google Fonts, retrieved and self-hosted by `next/font` at build time                                  | Florian Karsten and contributors                                                   | Site font; service has no fixed npm version                                                                                                                      |
| [Giscus](https://giscus.app/)                                                                                                               | Hosted integration via Pliny                                                                          | Giscus contributors                                                                | Comments                                                                                                                                                         |
| [Umami](https://umami.is/)                                                                                                                  | Hosted integration via Pliny                                                                          | Mike Cao and contributors                                                          | Optional analytics                                                                                                                                               |
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)                                                                   | Current reference                                                                                     | MDN contributors / Mozilla                                                         | Security-header configuration reference; headers require a compatible server and are not applied by static GitHub Pages                                          |
| [Stack Overflow autofill example](https://stackoverflow.com/questions/61083813/how-to-avoid-internal-autofill-selected-style-to-be-applied) | Original reference for local autofill workaround                                                      | Authors credited on the linked question and answers                                | CSS workaround                                                                                                                                                   |
| [GitHub Actions starter workflows](https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml)                                 | Current upstream reference; custom workflow here                                                      | GitHub and contributors                                                            | Deployment workflow origin                                                                                                                                       |
| [Node.js](https://nodejs.org/), [Git](https://git-scm.com/), [GitHub Pages](https://pages.github.com/)                                      | Node 24 LTS; Git and hosting managed by the environment                                               | Node.js contributors; Linus Torvalds / Junio C Hamano and Git contributors; GitHub | Runtime, version control and hosting                                                                                                                             |
| [Yarn](https://github.com/yarnpkg/berry)                                                                                                    | 4.18.1                                                                                                | Yarn contributors                                                                  | Package manager                                                                                                                                                  |

### Direct application and development packages

Author names below come from upstream npm metadata; each package links to its original source or npm record.

| Package                                                                                         | Version      | Authors / maintainers                                                |
| ----------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------- |
| [@headlessui/react](https://github.com/tailwindlabs/headlessui)                                 | 2.2.10       | reinink, adamwathan, malfaitrobin and contributors                   |
| [@next/bundle-analyzer](https://github.com/vercel/next.js)                                      | 16.4.2       | vercel-release-bot, matt.straka and contributors                     |
| [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)                         | 0.5.11       | reinink, adamwathan, malfaitrobin, thecrypticace and contributors    |
| [@tailwindcss/postcss](https://github.com/tailwindlabs/tailwindcss)                             | 4.3.3        | reinink, adamwathan, malfaitrobin and contributors                   |
| [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)               | 0.5.20       | reinink, adamwathan, malfaitrobin and contributors                   |
| [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)                                | 4.0.0-beta.0 | Will Po                                                              |
| [contentlayer2](https://github.com/timlrx/contentlayer2)                                        | 0.5.8        | schickling                                                           |
| [esbuild](https://github.com/evanw/esbuild)                                                     | 0.28.2       | esbuild and contributors                                             |
| [github-slugger](https://github.com/Flet/github-slugger)                                        | 2.0.0        | Dan Flettre                                                          |
| [gray-matter](https://github.com/jonschlinkert/gray-matter)                                     | 4.0.3        | Jon Schlinkert                                                       |
| [hast-util-from-html-isomorphic](https://github.com/syntax-tree/hast-util-from-html-isomorphic) | 2.0.0        | Remco Haszing                                                        |
| [image-size](https://codeberg.org/image-size/image-size)                                        | 2.0.4        | netroy <aditya@netroy.in> (http://netroy.in/)                        |
| [next](https://github.com/vercel/next.js)                                                       | 16.4.2       | vercel-release-bot, matt.straka, matheuss, zeit-bot and contributors |
| [next-contentlayer2](https://github.com/timlrx/contentlayer2)                                   | 0.5.8        | schickling                                                           |
| [next-themes](https://github.com/pacocoursey/next-themes)                                       | 0.4.6        | paco, trm217 and contributors                                        |
| [pliny](https://www.npmjs.com/package/pliny)                                                    | 0.4.1        | Timothy Lin                                                          |
| [postcss](https://github.com/postcss/postcss)                                                   | 8.5.30       | Andrey Sitnik                                                        |
| [react](https://github.com/react/react)                                                         | 19.3.1       | fb, react-bot and contributors                                       |
| [react-dom](https://github.com/react/react)                                                     | 19.3.1       | fb, react-bot and contributors                                       |
| [reading-time](https://github.com/ngryman/reading-time)                                         | 1.5.0        | Nicolas Gryman                                                       |
| [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)                | 7.1.0        | Titus Wormer                                                         |
| [rehype-citation](https://github.com/timlrx/rehype-citation)                                    | 2.3.2        | Timothy Lin                                                          |
| [rehype-katex](https://github.com/remarkjs/remark-math.git#main)                                | 7.0.1        | Junyoung Choi                                                        |
| [rehype-katex-notranslate](https://github.com/PrinOrange/rehype-katex-notranslate)              | 1.1.4        | Ethan Zhang                                                          |
| [rehype-preset-minify](https://github.com/rehypejs/rehype-minify.git#main)                      | 7.0.1        | Titus Wormer                                                         |
| [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)                                | 2.0.2        | Timothy Lin                                                          |
| [rehype-slug](https://github.com/rehypejs/rehype-slug)                                          | 6.0.0        | Titus Wormer                                                         |
| [remark](https://github.com/remarkjs/remark.git#main)                                           | 15.0.1       | Titus Wormer                                                         |
| [remark-gfm](https://github.com/remarkjs/remark-gfm)                                            | 4.0.1        | Titus Wormer                                                         |
| [remark-github-blockquote-alert](https://github.com/jaywcjlove/remark-github-blockquote-alert)  | 2.1.0        | Kenny Wong                                                           |
| [remark-math](https://github.com/remarkjs/remark-math.git#main)                                 | 6.0.0        | Junyoung Choi                                                        |
| [tailwindcss](https://github.com/tailwindlabs/tailwindcss)                                      | 4.3.3        | malfaitrobin, adamwathan, reinink and contributors                   |
| [unist-util-visit](https://github.com/syntax-tree/unist-util-visit)                             | 5.1.0        | Titus Wormer                                                         |
| [@svgr/webpack](https://github.com/gregberge/svgr.git#main)                                     | 8.1.0        | Greg Bergé                                                           |
| [@types/mdx](https://github.com/DefinitelyTyped/DefinitelyTyped)                                | 2.0.14       | types and contributors                                               |
| [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped)                              | 19.3.0       | types and contributors                                               |
| [cross-env](https://github.com/kentcdodds/cross-env)                                            | 10.1.0       | Kent C. Dodds                                                        |
| [eslint](https://github.com/eslint/eslint)                                                      | 9.39.5       | Nicholas C. Zakas                                                    |
| [eslint-config-next](https://github.com/vercel/next.js)                                         | 16.4.2       | timneutkens, timer, vercel-release-bot and contributors              |
| [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)                    | 10.1.8       | Simon Lydell                                                         |
| [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)                    | 5.5.7        | Teddy Katz                                                           |
| [husky](https://github.com/typicode/husky)                                                      | 9.1.7        | typicode                                                             |
| [lint-staged](https://github.com/lint-staged/lint-staged)                                       | 17.6.0       | Andrey Okonetchnikov                                                 |
| [prettier](https://github.com/prettier/prettier)                                                | 3.9.10       | James Long                                                           |
| [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)      | 0.8.1        | malfaitrobin, adamwathan, reinink, thecrypticace and contributors    |
| [typescript](https://github.com/microsoft/TypeScript)                                           | 6.0.3        | Microsoft Corp.                                                      |

### Deployment actions

Actions are pinned to immutable release commits. Authors: GitHub Actions contributors.

| Action                                                                            | Release | Commit                                     |
| --------------------------------------------------------------------------------- | ------- | ------------------------------------------ |
| [actions/checkout](https://github.com/actions/checkout)                           | v7.0.1  | `3d3c42e5aac5ba805825da76410c181273ba90b1` |
| [actions/setup-node](https://github.com/actions/setup-node)                       | v7.1.0  | `949feb2413d6458794dcd2491c4babbbce0c15c1` |
| [actions/cache](https://github.com/actions/cache)                                 | v6.1.0  | `55cc8345863c7cc4c66a329aec7e433d2d1c52a9` |
| [actions/configure-pages](https://github.com/actions/configure-pages)             | v6.0.0  | `45bfe0192ca1faeb007ade9deae92b16b8254a0d` |
| [actions/upload-pages-artifact](https://github.com/actions/upload-pages-artifact) | v5.0.0  | `fc324d3547104276b827a68afc52ff2a11cc49c9` |
| [actions/deploy-pages](https://github.com/actions/deploy-pages)                   | v5.0.1  | `368f82528645a54fb793d4d04e342629a3f51346` |

## Attribution and licenses

The original template's MIT notice remains in [LICENSE](LICENSE). Third-party npm packages retain their own license files and authorship notices. References were moved here from source comments.

- **Night Owl:** MIT License. Copyright (c) 2018 Sarah Drasner. Sarah Drasner's (@sdras) Night Owl; ported by Sara Vieira (@SaraVieira); added by Souvik Mandal (@SimpleIndian). The MIT permission and warranty terms in [LICENSE](LICENSE) also apply to this copied theme material, with this copyright notice.
- **Heroicons:** MIT License, Copyright (c) Tailwind Labs, Inc. The MIT permission and warranty terms in [LICENSE](LICENSE) also apply to these copied SVG paths; see [upstream license](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).
- **Simple Icons:** CC0 1.0 Universal; [upstream license and brand guidance](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md). Brand trademarks remain with their respective owners.
- **Space Grotesk:** SIL Open Font License 1.1; see the [font repository](https://github.com/floriankarsten/space-grotesk).
- **Stack Overflow:** contributions are attributed on the linked page and distributed under the applicable [CC BY-SA terms](https://stackoverflow.com/help/licensing). The inherited autofill workaround remains a local adaptation.
