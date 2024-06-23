export const DEFAULT_USER_AVATAR_URL =
  "https://avatars.githubusercontent.com/u/111940294?v=4";

export const BANNER_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg";

export const GET_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGFlYzgwYTMxMGUzM2RmZDY4MjE1ZDg0MGZkNDg0OSIsInN1YiI6IjY2NTY4YWMxNDNiNzk3M2U1YmE4YTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPmZ-HFAGCl8_t3nld3rZp28MkYfnIwnwZcmP5UYLvE",
  },
};

export const NOW_PLAYING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const BANNER_TRAILER_VIDEO_API_URL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

export const SEARCH_MOVIE_API_URL = (movieName, includeAdult) =>
  `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=${includeAdult}`;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const ACCEPTED_LANGUAGE = [
  { name: "English", code: "en" },
  { name: "Hindi", code: "hi" },
  { name: "Spanish", code: "es" },
  { name: "Japanese", code: "ja" },
];
