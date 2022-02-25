


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import user from '../../images/user.png';
import { useDispatch } from 'react-redux';
import './Header.scss';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


const Header = () => {

    const [ term, setTerm ] = useState("");
    const dispatch = useDispatch();

    // When User cLick For search then this function was Run
    const submitHandler = (e) => {
        e.preventDefault();

        if(term === "") return alert("Please Enter Movies Name...!")
        // console.log(term);
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));

        // Clear Filled After Search
        setTerm("");
    };

    return(

        <div className="header">

            {/* Logo */}
            <div className="logo"><Link to="/">Movie App</Link></div>

            {/* SearchBar */}
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => { setTerm(e.target.value) }} />
                    <button type='submit'><i className="fa fa-search"></i></button>
                </form>
            </div>
            

            {/* User Image */}
            <div className="user-image">
                <img src={user} alt="user" />
            </div>

        </div>

    );

}

export default Header;