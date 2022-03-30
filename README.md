![](https://img.shields.io/badge/Build%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiesitftung%20Berlin-blue)

# freemove

This repository contains the source code of the website for the freemove project - a research project investigating privacy-centered urban mobility data.

## Tech Stack

### Content & Structure (HTML)
This static site is built with [Eleventy (11ty)](https://www.11ty.dev/docs/). It uses the templating language [liquid](https://liquidjs.com/index.html) to combine together data and templates.

### Styling (CSS)
The pages are styles using [Tailwind CSS](https://tailwindcss.com). 

## Getting started

### Requirements

- Node.js

First, install the dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

A development server will be available at [http://localhost:8080](http://localhost:8080).

## Layouts

Layouts are templates that wrap other templates and surrounds them with markup. We use 3 types of layouts:

- **root:** The base layout that includes the HTML skeleton that all other layouts and pages use.
- **wrapper:** This layout is applied to all pages, except the events.
- **event:** Specific layout for events.

## Partials

Reusable elements or elements that are too big for implementing them directly in the templates are added as partials in `src/_includes/partials`.

## Assets

The assets such as images, audio, stylesheets, etc. can be found in `src/assets/`. If you want to use a folder inside that doesn't exist yet, you need to add it to the Eleventy [asset pipeline](https://www.11ty.dev/docs/copy/).

## Data

General data can be defined in `src_/data/`.

## Testing

There are currently no tests in this project.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://fabianmoronzirfas.me/"><img src="https://avatars.githubusercontent.com/u/315106?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Fabian Morón Zirfas</b></sub></a><br /><a href="https://github.com/technologiestiftung/CityLAB Slides/commits?author=ff6347" title="Documentation">📖</a></td>
    <td align="center"><a href="https://vogelino.com/"><img src="https://avatars.githubusercontent.com/u/2759340?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Lucas Vogel</b></sub></a><br /><a href="https://github.com/technologiestiftung/CityLAB Slides/commits?author=vogelino" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/lucasoeth"><img src="https://avatars.githubusercontent.com/u/43838158?v=4?s=64" width="64px;" alt=""/><br /><sub><b>lucasoeth</b></sub></a><br /><a href="https://github.com/technologiestiftung/CityLAB Slides/commits?author=lucasoeth" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dnsos"><img src="https://avatars.githubusercontent.com/u/15640196?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Dennis Ostendorf</b></sub></a><br /><a href="https://github.com/technologiestiftung/CityLAB Slides/commits?author=dnsos" title="Code">💻</a></td>
    <td align="center"><a href="https://www.technologiestiftung-berlin.de/de/startseite/"><img src="https://avatars.githubusercontent.com/u/15638947?v=4?s=64" width="64px;" alt=""/><br /><sub><b>edgalindo</b></sub></a><br /><a href="#design-edgalindo" title="Design">🎨</a></td>
    <td align="center"><a href="http://www.awsm.de/"><img src="https://avatars.githubusercontent.com/u/434355?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Ingo Hinterding</b></sub></a><br /><a href="#projectManagement-Esshahn" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

