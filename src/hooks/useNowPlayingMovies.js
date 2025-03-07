import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
    // .then((res) => res.json())
    // .then((res) => console.log(res))
    // .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
