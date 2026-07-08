class Footer extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
     this.innerHTML = `
    <img src="/resources/kurisu_sunglasses_transparent.png" class="footer-img-l">
    <footer class="main-content">
      Armand Rathgeb, 2026- 
      <div class="vr"></div>
      <a href="/about.html">Contact me</a> 
      <div class="vr"></div>
      <a href="/pgp.html">PGP</a>
    <footer>
    `;
  }
}
customElements.define("footer-element", Footer)