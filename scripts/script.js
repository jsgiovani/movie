import {HTMLmovie, closeSidebar, fetchMovies, options, showSidebar} from './functions.js';


showSidebar();
closeSidebar();



if (document.querySelector('#now_playing')) {
    // fetch all movies 
    fetchMovies('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', '#now_playing', 4);
}



if (document.querySelector('#upcoming')) {
    // fetch all movies 
   //fetch 
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        const movies = response.results.map(item => {

            const movie = {
                id: item.id,
                title: item.title,
                img: item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`:null,
                puntuation: item.vote_average,
                type: 'movie'
            };

            return movie

        });


        const upcoming = document.querySelector('#upcoming');

        movies.forEach((item,index) => {
            if (index> 4 && index<=12 && item.img) {
                upcoming.appendChild(HTMLmovie(item));
            }
        });

    })
    .catch(err => console.error(err));

    
}



if (document.querySelector('.topMovies')) {
    // fetch all movies 
    fetchMovies('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1','.topMovies');
    
}


if (document.querySelector('.tvShows')) {
    // fetch all movies 
    fetchMovies('https://api.themoviedb.org/3/trending/tv/day?language=en-US','.tvShows',null,'show');
}


if (document.querySelector('.upcomingMovies')) {
    // fetch all movies 
    fetchMovies('https://api.themoviedb.org/3/movie/upcoming?language=en-US','.upcomingMovies',null);
}

