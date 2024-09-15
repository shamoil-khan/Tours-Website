const file = `
  <iframe
    width="853"
    height="480"
    src="https://www.youtube.com/embed/2jjR-iGxVYM"
    title="Weather App using HTML CSS &amp; Javascript | Weather App Javascript"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  `;

for (let i = 0; i <= 70; i++) {
  document.getElementById("forLoad").insertAdjacentHTML("beforeend", file);
}
