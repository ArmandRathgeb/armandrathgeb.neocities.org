class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
     this.innerHTML = `
    <header class="shadow">
      <nav class="header-nav">
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/blog.html">Blog</a></li>
          <li><a href="/misc.html">Misc</a></li>
          <li class="dropdowntrigger">
            <a>
              More <span class="dropdown-arrow">&blacktriangledown;</span>
            </a>
            <ul class="dropdown">
              <li><a href="/guestbook.html">Guestbook</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <h1 class="site-title">Armand's Website</h1>
    </header>
    <br>
    `;
  }
}
customElements.define("navbar-header",NavBar)