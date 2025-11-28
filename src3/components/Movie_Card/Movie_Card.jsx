import React from 'react'
import './Movie_Card.css'
export default function Movie_Card({movie}) {
  return (
    <a href={`https://themoviedb.org/movie/${movie.id}`}  className="movie_card">
        <img className='movie_poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        <div className="movie_details">
            <h3 className="movie_details_heading">
                     {movie.original_title}{movie.adult}
            </h3>
            <div className="movie_date_rate">
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}⭐</p>
            </div>
            <p className="movie_description">
                   {movie.overview.slice(0,100)+"..."}
            </p>
        </div>
    </a>
    
  )
}
