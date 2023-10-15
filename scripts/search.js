import {fetchMovies} from './functions.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('search')


fetchMovies(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=en-US&page=1`, '.search-result', null)