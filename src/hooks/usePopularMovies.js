import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { GET_API_OPTIONS, POPULAR_MOVIES_API_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    // const user = auth.currentUser;
    if (user && user?.isLoggedIn) {
      fetch(POPULAR_MOVIES_API_URL, GET_API_OPTIONS)
        .then((response) => response.json())
        .then((response) => {
          console.log(response.results);
          dispatch(addPopularMovies(response.results));
        })
        .catch((err) => console.error(err));
    }
  }, [user]);
};

export default usePopularMovies;
