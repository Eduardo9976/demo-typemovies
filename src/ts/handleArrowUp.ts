interface ArrowUpInit {
  init: () => void
}

export default class HandleArrowUp implements ArrowUpInit  {
  // buttonToTop é o elemento que ao ser clicado vai para o topo
  private buttonToTop: HTMLSpanElement | null

  constructor(button: string) {
    this.buttonToTop = document.querySelector(button)

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  private addEvents() {
    // Evento de scroll no window
    window.addEventListener('scroll', this.handleScroll)
    // ao clicar no botao manda para o topo
    this.buttonToTop?.addEventListener('click', this.handleClick)
  }

  private handleScroll () {
    // window.innerHeight ----- tamanho da tela do dispositivo
    // window.pageYOffset ----- tamanho que a barra de scroll já movimentou
    if (window.pageYOffset > window.innerHeight ) {
      // Se o scroll foi maior que o tamho da tela aparece o elemento para mandar para o topo
      if(this.buttonToTop) this.buttonToTop.classList.add('in')
    } else {
      if(this.buttonToTop) this.buttonToTop.classList.remove('in')
    }
  }

  private handleClick () {
    window.scrollTo(0 ,0)
  }

  init () {
    if (this.buttonToTop) {
      this.addEvents()
    }
  }
}
