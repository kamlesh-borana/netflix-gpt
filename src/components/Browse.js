import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();

  useNowPlayingMovies();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    // const user = auth.currentUser;
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
