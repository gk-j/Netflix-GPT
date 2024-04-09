import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        trendingOfTheDay:null,
        trendingOfTheWeek:null
    },
    reducers:{
            addNowPlayingMovies : (state,action) =>{
                state.nowPlayingMovies = action.payload
            },
            addPopularMovies : (state,action) =>{
                state.popularMovies = action.payload
            },
            addTopRatedMovies: (state,action) =>{
                state.topRatedMovies = action.payload
            },
            addUpComingMovies: (state,action) =>{
                state.upComingMovies = action.payload
            },
            addTrendingOfTheDay: (state,action) =>{
                state.trendingOfTheDay = action.payload
            },
            addTrendingOfTheWeek: (state,action) =>{
                state.trendingOfTheWeek = action.payload
            },
            addTrailerVideo :(state,action) =>{
                state.trailerVideo = action.payload
            }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies,addTrendingOfTheDay,addTrendingOfTheWeek,addTrailerVideo} = movieSlice.actions

export default movieSlice.reducer
