import {fetchMovie, fetchMovies} from './functions.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const type = urlParams.get('type');



//fetch movie
fetchMovie(id, type);


if (type == 'movie') {
    fetchMovies(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, '.similar',12);
} else {
    fetchMovies(`https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`, '.similar',12, 'show');
}
//fetch recommende itimes based on selected movie