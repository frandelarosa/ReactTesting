import axios from "axios";
import { Media } from "../models/media";

export class IDMB {

    search(query: string): Array<Media> {

        let testArray : Array<Media> = [];

        var testMedia1 = new Media("Game of Thrones", "2007", "https://media.vanityfair.com/photos/5c781d861df6c6267ee267c9/2:3/w_639,h_959,c_limit/t-game-of-thrones-posters.jpg")
        var testMedia2 = new Media("Stranger Things", "2012", "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg")
        
        testArray.push(testMedia1)
        testArray.push(testMedia2)
        /*
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: query },
            headers: {
              'X-RapidAPI-Key': '81d3fe7169mshe77a2172e377ef5p18f160jsn1f867aab1aaa',
              'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              
              return testArray
          }).catch(function (error) {
            return testArray
          });
          */
         return testArray
        
    }

}