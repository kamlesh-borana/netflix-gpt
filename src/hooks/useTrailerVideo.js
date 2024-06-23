import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BANNER_TRAILER_VIDEO_API_URL, GET_API_OPTIONS } from "../config";
import { addBannerMovieTrailer } from "../redux/moviesSlice";

const useTrailerVideo = () => {
  const bannerMovie = useSelector((state) => state.movies.bannerMovie);
  const bannerMovieTrailer = useSelector(
    (state) => state.movies.bannerMovieTrailer
  );

  const dispatch = useDispatch();

  const { id } = bannerMovie || {};

  useEffect(() => {
    if (!bannerMovieTrailer && id) {
      fetch(BANNER_TRAILER_VIDEO_API_URL(id), GET_API_OPTIONS)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          const filteredVideos = response?.results?.filter(
            (video) => video?.type === "Trailer"
          );
          dispatch(addBannerMovieTrailer(filteredVideos[0]));
        })
        .catch((err) => console.error(err));
    }
  }, [bannerMovieTrailer, id]);

  return bannerMovieTrailer;
};

export default useTrailerVideo;
