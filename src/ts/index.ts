import HandleAddMovies from './addListMovies'
import HandleClick from './handleClickMovies'
import HandleIframe from './handleIframe'
import HandleArrowUp from './handleArrowUp'

const sectionFiccao = new HandleAddMovies('.ficcao', 878).init()
const sectionComedia = new HandleAddMovies('.comedia', 35).init()
const sectionDrama = new HandleAddMovies('.drama', 18).init()
const sectionMisterio = new HandleAddMovies('.misterio', 9648).init()
const sectionAventura = new HandleAddMovies('.aventura', 12).init()
const sectionAnimacao = new HandleAddMovies('.crime', 80).init()


let isReady: MutationObserver = new MutationObserver((mutations) => {
  if (mutations.length === 20) {
    const clickEvents = new HandleClick('.conteudo-item', '.details', '.close').init()
    isReady.disconnect()
  }
})
isReady.observe(document.querySelector('.crime') as Node, {
  childList: true
})

const iframe = new HandleIframe('.details-trailer', '.close-iframe', '.videoWrapper-full').init()
const arrowUp = new HandleArrowUp('.arrow_up').init()