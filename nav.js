document.addEventListener("DOMContentLoaded", () => {

  const nav = `
  <div class="app-nav">
      <div class="nav-left">
          <a href="index.html" class="nav-logo">Laskiainen</a>
      </div>

      <div class="nav-right">
          <a href="index.html" class="nav-link">🏠 Etusivu</a>
          <a href="laskiainenV13.html" class="nav-link">SoLaskiainen</a>
          <a href="jalkilaskiainen.html" class="nav-link">Jälkilaskiainen</a>
          <a href="laskiainenV2.html" class="nav-link">Laskiainen</a>
      </div>
  </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = nav;

  document.body.prepend(container);

});
