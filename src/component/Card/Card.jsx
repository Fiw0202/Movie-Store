import { useState } from "react";
import "./Card.css";

const Image_Path = "https://image.tmdb.org/t/p/w500";

function Card(movie) {
  return (

    <div className="card">
      <img src={Image_Path + movie.info.poster_path} className="poster"></img>
      <div className="movie-details">
        <div className="box">
          <h4 className="title">{movie.info.title}</h4>
        </div>
      </div>
    </div>
  );
}
export default Card;
