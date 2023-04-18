import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    //here we are writing a logic if page got refreshed our banner need to changed

    async function fetchDataForBanner() {
      const requestForBanner = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        requestForBanner.data.results[
          Math.floor(Math.random() * requestForBanner.data.results.length) //for choosing random movie from the data
        ]
      );
      // console.log(requestForBanner.data.results,"result")
      return requestForBanner;
    }
    fetchDataForBanner();
  }, []);

  // console.log(movie,"movieeeeeee")

  return (
    <header
      className="bannerHeader"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //if movie doesn't exist it will not give undefined
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContent">
        <h1 className="banner_title">
          {/* // {banner title  } */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
