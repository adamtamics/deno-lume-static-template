export const title = "This page is based on a javascript template";
export const layout = "layout.njk";
export const links = [
  {
    text: "Kinsta",
    url: "https://kinsta.com",
  },
  {
    text: "Kinsta Static Site",
    url: "https://kinsta.com/static-site-hosting",
  },
];

export default function ({ title, links }) {
  return `
  <article>
    <header>
      <h1>${title}</h1>
    </header>

    <ul>
      ${
    links.map((link) => `<li><a href="${link.url}" target="_blank">${link.text}</a></li>`).join(
      "",
    )
  }
    </ul>
  </article>`;
}