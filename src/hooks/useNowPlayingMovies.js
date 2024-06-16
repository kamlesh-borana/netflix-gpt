import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { GET_API_OPTIONS, NOW_PLAYING_MOVIES_API_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    // const user = auth.currentUser;
    if (user && user?.isLoggedIn) {
      fetch(NOW_PLAYING_MOVIES_API_URL, GET_API_OPTIONS)
        .then((response) => response.json())
        .then((response) => {
          console.log(response.results);
          dispatch(addNowPlayingMovies(response.results));
        })
        .catch((err) => console.error(err));
    }
  }, [user]);
};

export default useNowPlayingMovies;
