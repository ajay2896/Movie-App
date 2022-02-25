


import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { 
    fetchAsyncMoviesOrShowDetail,
    getSelectedMovieOrShow,
    removeSelectedMovieOrShow
} from '../../features/movies/movieSlice';
import './MovieDetail.scss';

const MovieDetail = () => {

    const { imdbID } = useParams();
    const dispatch = useDispatch(fetchAsyncMoviesOrShowDetail);
    const data = useSelector(getSelectedMovieOrShow);
    console.log(data);

    useEffect( () => {

        dispatch(fetchAsyncMoviesOrShowDetail(imdbID));

        // CleanUp Funtion For Clear Past Data From state
        return () => {
            dispatch(removeSelectedMovieOrShow());
        }

    }, [dispatch , imdbID] )

    return(

        

            <div className="movie-section">
                {Object.keys(data).length === 0 ? (
                    <div>...Loading</div>
                ) : (

                <>
                    {/* Left Section */}
                    <div className="section-left">
                        {/* Movie Title */}
                        <div className="movie-title">
                            {data.Title}
                        </div>

                        {/* Movie Rating */}
                        <div className="movie-rating">

                            <span>
                                IMDP Rating <i className='fa fa-star'></i> : {data.imdbRating}
                            </span>

                            <span>
                                IMDB Votes <i className='fa fa-thumbs-up'></i> : {" "}
                                {data.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film"></i> : {data.Year}
                            </span>
                            <span>
                                Year <i className="fa fa-calendar"></i> : {data.Year}
                            </span>

                        </div>

                        {/* Movie Plot */}
                        <div className="movie-plot">{data.Plot}</div>

                        {/* Movie Info */}
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{data.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{data.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{data.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{data.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{data.Awards}</span>
                            </div>

                        </div>
                    </div>

                    {/* Right section */}
                    <div className="sectio-right">
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                </>
                )}
            </div>

    );

}

export default MovieDetail;