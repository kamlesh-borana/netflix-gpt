import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { GET_API_OPTIONS, UPCOMING_MOVIES_API_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useUpcomingMovies = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    // const user = auth.currentUser;
    if (user && user?.isLoggedIn) {
      fetch(UPCOMING_MOVIES_API_URL, GET_API_OPTIONS)
        .then((response) => response.json())
        .then((response) => {
          console.log(response.results);
          dispatch(addUpcomingMovies(response.results));
        })
        .catch((err) => console.error(err));
    }
  }, [user]);
};

export default useUpcomingMovies;
