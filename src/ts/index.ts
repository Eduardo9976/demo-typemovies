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

//Ficcao
let isReadyFiccao: MutationObserver = new MutationObserver((mutations) => {
  if (mutations.length === 20) {
     new HandleClick('.ficcao .conteudo-item', '.details', '.close').init()
    isReadyFiccao.disconnect()
  }
})
isReadyFiccao.observe(document.querySelector('.ficcao') as Node, {
  childList: true
})

//Comédia
let isReadyComedia: MutationObserver = new MutationObserver((mutations) => {
  if (mutations.length === 20) {
     new HandleClick('.comedia .conteudo-item', '.details', '.close').init()
    isReadyComedia.disconnect()
  }
})
isReadyComedia.observe(document.querySelector('.comedia') as Node, {
  childList: true
})

//Drama
let isReadyDrama: MutationObserver = new MutationObserver((mutations) => {
  if (mutations.length === 20) {
     new HandleClick('.drama .conteudo-item', '.details', '.close').init()
    isReadyDrama.disconnect()
  }
})
isReadyDrama.observe(document.querySelector('.drama') as Node, {
  childList: true
})

//Mistério
let isReadyMisterio: MutationObserver = new MutationObserver((mutations) => {
  if (mutations.length === 20) {
     new HandleClick('.misterio .conteudo-item', '.details', '.close').init()
    isReadyMisterio.disconnect()
  }
})
isReadyMisterio.observe(document.querySelector('.misterio') as Node, {
  childList: true
})

//Aventura
let isReadyAventura: MutationObserver = new MutationObserver((mutations) => {
  if (mutations.length === 20) {
     new HandleClick('.aventura .conteudo-item', '.details', '.close').init()
    isReadyMisterio.disconnect()
  }
})
isReadyAventura.observe(document.querySelector('.aventura') as Node, {
  childList: true
})

//Crime
let isReadyCrime: MutationObserver = new MutationObserver((mutations) => {
  if (mutations.length === 20) {
     new HandleClick('.crime .conteudo-item', '.details', '.close').init()
    isReadyMisterio.disconnect()
  }
})
isReadyCrime.observe(document.querySelector('.crime') as Node, {
  childList: true
})

const iframe = new HandleIframe('.details-trailer', '.close-iframe', '.videoWrapper-full').init()
const arrowUp = new HandleArrowUp('.arrow_up').init()