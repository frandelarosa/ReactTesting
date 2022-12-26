import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MediaItems from './components/MediaComponent';

function getMovies(){

  let testArray : Array<Media> = [];

  var testMedia1 = new Media("Game of Thrones", "2007", "https://media.vanityfair.com/photos/5c781d861df6c6267ee267c9/2:3/w_639,h_959,c_limit/t-game-of-thrones-posters.jpg")
  var testMedia2 = new Media("Stranger Things", "2012", "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg")
  
  testArray.push(testMedia1)
  testArray.push(testMedia2)

  return testArray

}

function App() {

  return (

    <div className="App">

      <h1>IMDB Query</h1>
      <MediaItems items={ ()=> getMovies() }/>
    </div>

  )
}

export default App
