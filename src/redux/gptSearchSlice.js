import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGPTSearch: false,
    gptSuggestedMovieNames: null,
    gptMovieSuggestions: null,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTSuggestedMovieNames: (state, action) => {
      state.gptSuggestedMovieNames = action.payload;
    },
    addGPTMovieSuggestions: (state, action) => {
      state.gptMovieSuggestions = action.payload;
    },
  },
});

export const {
  toggleGPTSearch,
  addGPTSuggestedMovieNames,
  addGPTMovieSuggestions,
} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
