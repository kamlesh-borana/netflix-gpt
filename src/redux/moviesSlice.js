import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    bannerTrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addBannerTrailerVideo: (state, action) => {
      state.bannerTrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addBannerTrailerVideo } =
  moviesSlice.actions;

export default moviesSlice.reducer;
