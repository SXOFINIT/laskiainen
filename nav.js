document.addEventListener("DOMContentLoaded", () => {

  const nav = `
  <div class="app-nav">
      <div class="nav-left">
          <a href="index.html" class="nav-logo">Laskiainen</a>
      </div>

      <div class="nav-right">
          <a href="index.html" class="nav-link">🏠 Etusivu</a>
          laskiainenV2.html
          jalkilaskiainenV2.html
      </div>
  </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = nav;

  document.body.prepend(container);

});



