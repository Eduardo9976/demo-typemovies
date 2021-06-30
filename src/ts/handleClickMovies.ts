interface PublicMethods {
  init: () => void
}

export default class HandleClick implements PublicMethods {
  private readonly loading: HTMLDivElement | null
  private movies: Element[] | null
  private containerDetailsFull: HTMLDivElement | null
  private buttonCloseDetails: HTMLSpanElement | null

  private detailsContainer: HTMLDivElement | null
  private detailsTitle: HTMLHeadingElement | null
  private detailsPoster: HTMLImageElement | null
  private detailsTag: HTMLParagraphElement | null
  private detailsPage: HTMLParagraphElement | null
  private detailsGen: HTMLParagraphElement | null
  private detailsSinopse: HTMLParagraphElement | null
  private detailsTrailer: HTMLAnchorElement | null

  constructor(list: string, containerDetailsFull: string, buttonCloseDetails: string) {
    this.loading = document.querySelector('.loading')
    this.movies = Array.from(document.querySelectorAll(list))
    this.containerDetailsFull = document.querySelector(containerDetailsFull)
    this.buttonCloseDetails = document.querySelector(buttonCloseDetails)
    
    this.getInfosForDetails = this.getInfosForDetails.bind(this)

    //outros containerDetails == .details + ...
    this.detailsContainer = document.querySelector(`${containerDetailsFull}-container`)
    this.detailsTitle = document.querySelector(`${containerDetailsFull}-container h2`)
    this.detailsPoster = document.querySelector(`${containerDetailsFull}-poster`)
    this.detailsTag = document.querySelector(`${containerDetailsFull}-tag`)
    this.detailsPage = document.querySelector(`${containerDetailsFull}-page`)
    this.detailsGen = document.querySelector(`${containerDetailsFull}-genero`)
    this.detailsSinopse = document.querySelector(`${containerDetailsFull}-sinopse`)
    this.detailsTrailer = document.querySelector(`${containerDetailsFull}-trailer`)
  }

  private addEvents () {
    this.movies?.forEach(movie => {
      // adicionar funcao de click para cada filme
      movie.addEventListener('click', () => {
        // ao ser clicado pegar o id do filme
        const ID = movie.getAttribute('id')
        this.loading?.classList.add('in')
        //fazer um get nas informações do filme get é o método abaixo
        if (ID) this.getInfosForDetails(ID)
      })
    })
  }

  private handleCloseDetails () {
    // fechar o modal de detalhes clicando no X
    this.buttonCloseDetails?.addEventListener('click', () => {
      if (this.containerDetailsFull) this.containerDetailsFull.style.display = 'none'
    } )
  }

  private async getInfosForDetails (ID: string | number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=66e3df787130147acae1d50069f3587c&append_to_response=videos&language=pt-BR`)
    const resJSON = await response.json()
    if (this.detailsContainer) {
      //setando o background do container com a foto do filme
      this.detailsContainer.style.background = `url('https://image.tmdb.org/t/p/original${resJSON.belongs_to_collection ? resJSON.belongs_to_collection.backdrop_path : resJSON.backdrop_path}') no-repeat center center`
    }

    //setando o título da pagina com o titulo do filme
    if (this.detailsTitle) this.detailsTitle.innerText = resJSON.title
    //setando o poster do filme 
    if (this.detailsPoster) this.detailsPoster.setAttribute('src', 'https://image.tmdb.org/t/p/w500/' + resJSON.poster_path)
    // setando a tag 
    if (this.detailsTag) this.detailsTag.innerText = `${resJSON.tagline ? resJSON.tagline : 'Indisponível'}`
    // setando o site
    if (this.detailsPage) this.detailsPage.innerText = `${resJSON.homepage ? resJSON.homepage : 'Indisponível'}`
    // passando pela lista de generos e gerando a string com os generos.
    if (this.detailsGen) {
      let text = ''
      resJSON.genres.forEach((genre: {name: string, id: number}, index: number) => text += genre.name + `${index + 1 !== resJSON.genres.length ? ', ' : '.'}`)
      this.detailsGen.innerText = text
    }
    //setando sinopse
    if (this.detailsSinopse) this.detailsSinopse.innerText = resJSON.overview
    //setando o id no link para assistir o trailer
    if (this.detailsTrailer) this.detailsTrailer.setAttribute('id', `${resJSON.videos.results.length > 0 ? resJSON.videos.results[0].key : '' }`)
    this.loading?.classList.remove('in')
    // exibir o container depois que tiver todas as informações 
    if (this.containerDetailsFull) this.containerDetailsFull.style.display = 'flex'
  }

  init() {
    if (this.movies && this.movies.length > 0 && this.containerDetailsFull && this.buttonCloseDetails) {
      this.addEvents()
      this.handleCloseDetails ()
    } else throw new Error('Seletor inválido')
  }
}
