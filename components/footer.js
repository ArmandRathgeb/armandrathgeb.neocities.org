class Footer extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
     this.innerHTML = `
    <footer>
      <center>
        <a href="https://neocities.org">
          <img src="/resources/neocities.png">
        </a>
        <img src="https://64.media.tumblr.com/a46e501a2384ed7cd58f610c0a0b467d/889ac2a8766e2e2b-04/s400x600/a4a2bfb7a99de220c2dd236ad2f6cf5e3c81a82d.jpg" width=240 height=60>
      </center>
    <footer>
    `;
  }
}
customElements.define("footer-element", Footer)