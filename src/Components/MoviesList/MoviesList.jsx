import React from 'react'
import './MoviesList.css'
import MovieCard from '../MovieCard/MovieCard'
const MoviesList = ({titleSearch , ratingSearch , data}) => {
    return (
        <div className="my-list">
            {
               data
               .filter(movie => movie.title.toUpperCase().includes(titleSearch.toUpperCase())
               && movie.rating >= ratingSearch)
               .map((movie , index)=> <MovieCard movie={movie} key={index}/>  )
            }
        </div>
    )
}

export default MoviesList
