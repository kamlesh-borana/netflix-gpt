import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BANNER_TRAILER_VIDEO_API_URL, GET_API_OPTIONS } from "../config";

const useTrailerVideo = () => {
  const bannerTrailerVideo = useSelector(
    (state) => state.movies.bannerTrailerVideo
  );
  const { id } = bannerTrailerVideo || {};
  useEffect(() => {
    if (id) {
      fetch(BANNER_TRAILER_VIDEO_API_URL(id), GET_API_OPTIONS)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    }
  }, [id]);
};

export default useTrailerVideo;
