


// Using React-Redux & Redux-Toolkit

import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movies/movieSlice";

// Creating store and Export
export const store = configureStore({

    reducer: {
        Movies: MovieSlice,
    },

});

