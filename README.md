![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

# freemove

This repository contains the source code of the website for the freemove project - a research project investigating privacy-centered urban mobility data.

## Tech Stack

### Content & Structure (HTML)

This static site is built with [Eleventy (11ty)](https://www.11ty.dev/docs/). It uses the templating language [liquid](https://liquidjs.com/index.html) to combine together data and templates.

### Styling (CSS)

The pages are styles using [Tailwind CSS](https://tailwindcss.com).

> **Attention**: The CSS pipeline is currently buggy in local development. Not all changes trigger the local dev server to reload properly.

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

## Updating content

All content for the website (events, blog posts, etc.) live in this repository. In this section you can find instructions on how to create new content, update or delete it.

### Workflow

For each change you want to make to the content, please create a new branch based on the `main` branch first. Then, make your changes and [open a Pull Request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). This PR can then be merged into `main`. If you need support for this workflow or encounter problems, please ask one of the repository maintainers for help.

### Blog posts

The freemove [blog](https://www.freemove.space/blog/) content can be found in the following folder: `src/blog`. You will find a file named `index.liquid` which you won't have to touch. It simply displays all available blog posts automatically. The interesting files are the ones with a `.md` file extension. Each of these [Markdown](https://en.wikipedia.org/wiki/Markdown) files holds the contents of a blog post. Note the first lines which are always encapsulated with three dashes like this:

```md
---
# [...]
---
```

This so-called "front matter" holds some metadata about the blog post. If you want to create a new blog post, duplicate one of the `.md` files and update the front matter according to your desired content.

> Note that you shouldn't update the line `layout: layouts/blog.liquid`. This is a property that all blog posts need.

One important bit is the `thumb_image_path` key. This is the path (relative to the `src` folder) to the image you want to have displayed in the blog overview page. Make sure to add that file to the `src/assets/images/blog` folder and add the correct path.

Below the second `---` goes the actual content of your blog post. If you want to show images in your Markdown, also add them to the same folder as the thumb image, as described above.

#### Deleting a blog post

If you want to delete a blog post, simply delete the file from the folder.

### Events

The freemove [event calendar](https://www.freemove.space/calendar/) can be found in the following folder: `src/calendar`. The structure here is the same as the blog posts, so the same instructions apply ⬆️.

There is one difference in that the content (below the second `---`) is the part that is collapsed in the UI at first.

In the event overview page, the events are automatically assigned to years according to the `date` key in the front matter.

#### Deleting an event

If you want to delete an event, simply delete the file from the folder.

### Project partners

If you need to make changes to the [project partners](https://www.freemove.space/partners/) section, go to `src/partners`. You will find several folders which each hold the content of one of the project partners. Inside a folder, the `.json` file holds general information about the responsible person of the partner, `index.md` is the place for the detailed text about said person. `school.md` holds the content that is displayed in the project partners overview page.

> Remember to add a new image should the responsoble person change.

### Documents (PDFs etc.)

If you want the page to host documents such as PDFs, simply add them to `src/assets/docs`. These will be automatically available in a path like this: https://www.freemove.space/docs/DLR_MovingLab_DSK_Freemove.pdf

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

## Credits

### Partners network

<table>
  <tr>
    <td>
      <img width="120" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-en.svg" />
    </td>
    <td>
      <img width="100" src="https://logos.citylab-berlin.org/logo-tu-berlin.svg" />
    </td>
    <td>
      <img width="100" src="https://logos.citylab-berlin.org/logo-htw-berlin.jpg" />
    </td>
  </tr>
  <tr>
    <td>
      <img width="60" src="https://logos.citylab-berlin.org/logo-dir-berlin.svg" />
    </td>
    <td>
      <img width="200" src="https://logos.citylab-berlin.org/logo-udk-berlin.svg" />
    </td>
    <td>
      <img width="140" src="https://logos.citylab-berlin.org/logo-fub-berlin.svg" />
    </td>
  </tr>
</table>

### Supported by

<table>
  <tr>
    <td>
      <a src="https://www.bmbf.de/bmbf/en/home/home_node.html">
        <img width="120" src="https://logos.citylab-berlin.org/logo-bbf.svg" />
      </a>
    </td>
  </tr>
</table>
