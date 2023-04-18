import React, { useState, useEffect } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"; //this url + movie poster_path url combined togater and give the movie image      this is from tmbd server for image (poster) we are rendering image by help of this = src={`${base_url}${movieData.poster_path}`}

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); //for you tube trailers
  useEffect(() => {
    //here we are going to run asynce code
    async function fetchData() {
      const request = await axios.get(fetchUrl); //axios is going to the api key "https://api.themoviedb.org/3",
      //then fetchUrl holding a key from an object name is "request"  so api + movie request something like this = https://api.themoviedb.org/3 + {tmbdApiKey}&language=en-US  from request folder
      // so result wil be https://api.themoviedb.org/3/{tmbdApiKey}&language=en-US

      //    console.log(request.data.results);
      setMovies(request.data.results);
      // return request;
    }
    fetchData();
  }, [fetchUrl]); //here pasting "fetchUrl" because when use outsider variable inside the UseEffect the result will be unexpected so we need use that outsider variable inside the useEffect which we are using
  // console.table(movies); //or you can do console.log

  const opts = {
    //for youtube options
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function handleClick(movieData2) {
    //when we click on the image so trailerUrl fire
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movieData2?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); // URLSearchParams  allows us to .get("v") because whan we atully want that is  "9YRVT_xywcs" this and this value holding "v"
          setTrailerUrl(urlParams.get("v"));
          //suppose if we have this Yt video link https://www.youtube.com/watch?v=9YRVT_xywcs so we only need  "9YRVT_xywcs" that thing which id after "v"
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    // parent div "row" & inside this we have nested div so that we can scroll
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* { several row_posters (the mpvies which we seeing in row)} */}

        {movies.map((movieData) => (
          //"/ekZobS8isE6mA53RAiGDG93hBxL.jpg"  in the date which we are getting in console
          <img
            key={movieData.id}
            onClick={() => handleClick(movieData)}
            className={`row_poster_img ${isLargeRow && "row_posterLarge"}`} //normal class name will = row_poster_img but if isLaregeRow happend you accept the class which = "row_posterLarge"
            // // src={`${base_url}${movieData.poster_path }`}   or down one
            src={`${base_url}${
              isLargeRow ? movieData.poster_path : movieData.backdrop_path
            }`} //backdrop_path its contain url for image poster
            alt={movieData.name}
          />
        ))}
      </div>
      {/* <Youtube videoId={trailerUrl} opts={opts}/> but if we have trailerUrl so run below one */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
