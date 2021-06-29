interface PublicMethods {
  init: () => void
}

export default class HandleIframe implements PublicMethods {
  private buttonAnchorOpen: HTMLAnchorElement | null 
  private buttonClose: HTMLSpanElement | null
  private wrapperFull: HTMLDivElement | null
  private iframe: HTMLIFrameElement | null

  constructor (buttonOpen: string, buttonClose: string, containerWrapperFull: string) {
    this.buttonAnchorOpen = document.querySelector(buttonOpen)
    this.buttonClose = document.querySelector(buttonClose)
    this.wrapperFull = document.querySelector(containerWrapperFull)
    this.iframe = document.querySelector('iframe')
  }

  private handleOpen() {
    // Adicionar função de click no link da sessao detalhes
    this.buttonAnchorOpen?.addEventListener('click', () => {
      // pegar o id que está no link
      const ID = this.buttonAnchorOpen?.getAttribute('id')
      // Setar o src do Iframe com o id que pegou do link
      this.iframe?.setAttribute('src', `//www.youtube.com/embed/${ID ? ID : 'xkvcuMjZwik'}?autoplay=1&mute=1&origin=http://localhost&hl=pt&modestbranding=1&fs=1&autohide=1`)
      if (this.wrapperFull) this.wrapperFull.style.display = 'flex'
    })
  }

  private handleClose() {
    // fechar o iframe quando clicar no X dentro do iframe
    this.buttonClose?.addEventListener('click', () => {
      if (this.wrapperFull) this.wrapperFull.style.display = 'none'
      // voltando o src para o video não disponível e tirando o autoplay
      this.iframe?.setAttribute('src', `//www.youtube.com/embed/xkvcuMjZwik?origin=http://localhost&hl=pt&modestbranding=1&fs=1&autohide=1`)
    })
  }

  init() {
    this.handleOpen()
    this.handleClose()
  }
}
