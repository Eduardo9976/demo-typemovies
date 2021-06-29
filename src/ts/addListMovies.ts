export default class HandleAddMovies {
  private readonly loading: HTMLDivElement | null
  private readonly container: HTMLElement | null
  private readonly genres: number
  private list: Array<any>

  constructor(container: string, genres: number) {
    this.loading = document.querySelector('.loading')
    this.container = document.querySelector(container)
    this.genres = genres
    this.list = []
  }

  private async getMovies():Promise<void> {
    // get na API
    this.loading?.classList.add('in')
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=66e3df787130147acae1d50069f3587c&language=pt-BR&with_genres=${this.genres}&sort_by=popularity.desc&include_adult=false&page=1&page=2&with_watch_monetization_types=flatrate`)
    const resJSON = await response.json()
    // atribuiu a resposta para lista
    this.list = resJSON.results
    this.addList()
  }

  private addList():void {
    // fez um for para passar por cada item
    this.list.forEach(movie => {
      // criar LI , setar a classe e o ID
      const li = document.createElement('li')
      li.classList.add('conteudo-item')
      li.setAttribute('id', `${movie.id}`)
      // img criar elemento IMG setar src e alt
      const img = document.createElement('img')
      img.setAttribute('src', `https://image.tmdb.org/t/p/w500${movie.poster_path}`)
      img.setAttribute('alt', `${movie.title}`)
      // criar o p e setar o texto
      const p = document.createElement('p')
      p.innerText = movie.title
      // adicionar a img e o p na LI
      li.appendChild(img)
      li.appendChild(p)
      // adicionar a LI no container UL
      this.container?.appendChild(li)
    })
    this.loading?.classList.remove('in')
  }

  init():void {
    if (this.container) {
      this.getMovies()
    }
  }
}