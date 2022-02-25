


// Creating Slice
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

// Initial State of State
const initialState = {

    // This State Store Movies
    movies:{},

    // This State Store Shows or Series
    shows:{},

    // Detail of Movie OR shows
    selectMoviesOrShow: {},

};

// Creating API For Fetch Movie From OMDP API
export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies" , 
    async (term) => {

    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);

    // For Check
    // console.log("The Response From API : ", response);

    // Return Data come From OMDB API
    return response.data;
} );


// Creating API For Fetch Shows From OMDP API
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
        
        // Response From IMBD Api
        const response = await movieApi.get( `?apiKey=${APIKey}&s=${term}&type=series`);

        // For Check
        // console.log("The Response From API : ", response);
        // Return Data Come From OMDB API
        return response.data;
    }
);

// Creating API For Fetch Detail OF Movies Or Shows From OMDP API
export const fetchAsyncMoviesOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMoviesOrShowDetail",
    async (id) => {
        // Response From IMBD Api
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);

        // Foe Check
        // console.log(response.data);
        // Return Details Of Movie Or Shows
        return response.data;
    }
);


// This is ' Slice '
// Name oF Slice is " moviesSlice " 
const MovieSlice = createSlice({

    name:"movies",
    initialState,

    // This is Reducers
    reducers: {
        
        removeSelectedMovieOrShow: (state) => {
            state.selectMoviesOrShow = {};
        }

    } ,

    // This is Extra Reducers
    extraReducers: {

        [fetchAsyncMovies.pending]: () => {
            console.log("Pending...");
        },

        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Movies Successfully...");
            return { ...state , movies: payload };
        },

        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected...");
        },

        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Fetched Shows Successfully...");
            return { ...state , shows: payload };
        },
        
        [fetchAsyncMoviesOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Details Successfully");
            return { ...state , selectMoviesOrShow: payload };
        },

    },

});

// Export 
export const { removeSelectedMovieOrShow } = MovieSlice.actions;
export const getAllMovies = (state) => state.Movies.movies;
export const getAllShows = (state) => state.Movies.shows;
export const selectMoviesOrShow = (state) => state.Movies.selectMoviesOrShow;
export const getSelectedMovieOrShow = (state) => state.Movies.selectMoviesOrShow;
export default MovieSlice.reducer;