



import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import Slider from "react-slick";
import { Settings } from '../../common/settings';
import './MovieListing.scss';

const MovieListing = () => {

    //Get Movies  From Store State By Importng "getAllMovies"
    const movies = useSelector(getAllMovies);
    // For checking Movies have or not
    // console.log("From Movie Listing Component : ",movies);

    const shows = useSelector(getAllShows);
    // For checking Shows have or not
    // console.log("From Shows Listing Component : ",shows);

    // Render Movie
    const RenderMovies = (movies.Response === "True")? (movies.Search.map( (movie , index) => ( <MovieCard key={index} data={movie}/> ) )) : (
    <div className="movies-error">
        <h3>{movies.Error}</h3>
    </div> ) ;

    // Render Shows
    const RenderShows = (shows.Response === "True") ? (shows.Search.map( ( shows , index ) => (<MovieCard key={index} data={shows} /> ))) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    );

    return(

        <div>
            <div className="movie-wrapper">

                {/* Movies */}
                <div className="movie-list">
                    <h2>Movies</h2>
                    <div className="movie-container">
                        <Slider  {...Settings} >{RenderMovies}</Slider> 
                    </div>
                </div>

                {/* Shows */}
                <div className="show-list">
                    <h2>Shows</h2>
                    <div className="show-container">
                    <Slider  {...Settings} >{RenderShows}</Slider> 
                    </div>
                </div>
                
            </div>
        </div>

    );

}

export default MovieListing;