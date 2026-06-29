class Footer extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
     this.innerHTML = `
    <img src="/resources/kurisu_sunglasses_transparent.png" class="footer-img-l">
    <footer class="main-content">
    <footer>
    `;
  }
}
customElements.define("footer-element", Footer)