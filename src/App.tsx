import './App.css'
import Media from './models/media'
import { MediaItems } from './components/MediaComponent';

function App() {

  let mediaList : Array<Media> = [];

  var media1 = new Media("Game of Thrones", "2007", "https://media.vanityfair.com/photos/5c781d861df6c6267ee267c9/2:3/w_639,h_959,c_limit/t-game-of-thrones-posters.jpg")
  var media2 = new Media("Stranger Things", "2012", "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg")

  mediaList.push(media1)
  mediaList.push(media2)

  return (

    <div className="App">
      <h1>IMDB Query</h1>
      <MediaItems items={mediaList}/>
    </div>

  )
}

export default App
