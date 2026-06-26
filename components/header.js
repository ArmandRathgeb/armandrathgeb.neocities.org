class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
     this.innerHTML = `
    <header>
      <div class="navbar">
        <a href="/index.html" class="active"><h3>Home</h3></a>
        <a href="/blog.html" class="active"><h3>Blog</h3></a>
        <a href="/misc.html" class="active"><h3>Misc</h3></a>
        <a href="/about.html" class="active"><h3>About</h3></a>
      </div>
    </header>
    `;
  }
}
customElements.define("navbar-header",NavBar)