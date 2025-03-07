import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constants';
import { useEffect } from 'react';
import { addTrailorVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length === 0 ? filterData[0] : json.results[0];
    // console.log(trailer.key);
    dispatch(addTrailorVideo(trailer));
    // console.log(trailer.key)
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
