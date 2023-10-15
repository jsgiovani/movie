import { MOVIES_CUALITY, btnCloseSdebar, btnShowSidebar, options, sidebar } from "./selectors.js";





function fetchMovies(url, printable, limit = null, type = 'movie'){
    fetch(url, options)
    .then(response => response.json())
    .then(response => {

        const movies = response.results.map(item =>{

            console.log(item);
            const movie = {
                id: item.id,
                title: item.original_title ?? item.original_name,
                img: item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}`:null,
                puntuation: item.vote_average,
                type: type,
                release_date: item.release_date ?? 'Unknown',
                runtime: item.runtime
            };


            return movie
        });

        const htmlPrintable = document.querySelector(`${printable}`);

    movies.forEach((item,index) => {


        if (item.img) {
            
            if (limit===null) {
                htmlPrintable.appendChild(HTMLmovie(item));
            }else{
                if(index<limit){
                    htmlPrintable.appendChild(HTMLmovie(item));
                }
            }
        }
    });

        
    })
    .catch(err => console.error(err));

}


// Create html to show a movie
function HTMLmovie(movie){
    const{id, title, img, puntuation, type, release_date} = movie;
    console.log(movie);
    const aMovie = document.createElement('a');
    aMovie.classList.add('movie');

    if (type==='movie') {
        aMovie.href = `movie.html?id=${id}&type=movie`
    } else {
        aMovie.href = `movie.html?id=${id}&type=show`
    }


    const imgElement = document.createElement('img');
    imgElement.src = img;
    const divMovieInfo = document.createElement('div');
    divMovieInfo.classList.add('movie-info');

    const divMovieTitlePunt = document.createElement('div');
    divMovieTitlePunt.classList.add('flex', 'justify-between', 'align-center');

    
    const h4Title = document.createElement('h4');
    h4Title.classList.add('movie-title');

    h4Title.textContent = title;

    const divPuntuationContainer = document.createElement('div');
    divPuntuationContainer.classList.add('flex', 'gap-1', 'align-center', 'text-secundary', 'movie-puntuation');
    
    const iIcon = document.createElement('i');
    iIcon.classList.add('fa-solid', 'fa-heart');

    const pPuntuation = document.createElement('p');
    pPuntuation.textContent = puntuation;

    divMovieTitlePunt.appendChild(h4Title);
    divMovieTitlePunt.appendChild(divPuntuationContainer);

    const divExtraInfo = document.createElement('div');
    divExtraInfo.classList.add('flex', 'justify-between', 'align-center', 'mt-1');

    const pRelease_date = document.createElement('p');
    pRelease_date.classList.add('movie-releaseDate', 'text-secundary');
    pRelease_date.textContent = release_date ?? 'Unknown';

    const pRuntime = document.createElement('p');
    pRuntime.classList.add('movie-runtime');
    pRuntime.textContent = MOVIES_CUALITY[getRandomInt(0,3)];





    divExtraInfo.appendChild(pRelease_date);
    divExtraInfo.appendChild(pRuntime);

    divPuntuationContainer.appendChild(iIcon);
    divPuntuationContainer.appendChild(pPuntuation);
    divMovieInfo.appendChild(divMovieTitlePunt);
    divMovieInfo.appendChild(divExtraInfo);
    aMovie.appendChild(imgElement);
    aMovie.appendChild(divMovieInfo);
    

    return aMovie;
}



function fetchMovie(id, type = 'movie') {

    let url;

    if (type=='movie') {
        url = `https://api.themoviedb.org/3/movie/${id}`
    }else{
        url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    }


    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const movieImg = document.querySelector('.movieImg');
        
        const movie = {
            img: `https://image.tmdb.org/t/p/original${response.poster_path}`,
            title: response.original_title ?? response.name,
            description: response.overview,
            release_date: response.release_date ?? response.first_air_date,
            runtime: response.runtime ? `${response.runtime} m`:'Unknown',
            vote_average: response.vote_average,
            genres: response.genres,
        };
        
        const imgElement = document.createElement('img');
        imgElement.src = movie.img;
        movieImg.appendChild(imgElement);


        document.querySelector('.movieTitle').textContent = movie.title;
        document.querySelector('.movieDescription').textContent = movie.description;
        document.querySelector('.release_date').textContent = movie.release_date;
        document.querySelector('.vote_average').textContent = movie.vote_average;
        document.querySelector('.runtime').textContent = movie.runtime;
        
        const generes = document.querySelector('.genres');

        movie.genres.forEach(genere => {
            const {name} = genere;
            const li = document.createElement('li');
            li.textContent = name;
            generes.appendChild(li);
        });
    })
    .catch(err => console.error(err));
    
}


btnCloseSdebar.addEventListener('click', closeSidebar);
btnShowSidebar.addEventListener('click', showSidebar);



function closeSidebar() {
    sidebar.classList.remove('show');
}


function showSidebar() {
    sidebar.classList.add('show');
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export {fetchMovies, fetchMovie, HTMLmovie, options, closeSidebar, showSidebar};