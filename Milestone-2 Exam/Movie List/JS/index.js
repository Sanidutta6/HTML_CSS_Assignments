const APIKEY = "3bd65894"; // Secret

document.addEventListener("DOMContentLoaded", function () {
    const movieSearch = document.getElementById("search");
    const movieList = document.getElementById("movie-list");

    movieSearch.addEventListener("change", async function (e) {
        const searchFor = e.target.value;
        if (searchFor === "") {
            return;
        }

        const URL = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchFor}&type=movie`;
        const response = await fetch(URL);
        const parsedResult = await response.json();
        const listOfMovies = parsedResult.Search;
        console.log(listOfMovies);
        movieList.innerHTML = ""; //Removing all previous elements

        listOfMovies.forEach(movie => {
            let { Title, Poster, imdbID } = movie;
            if (Poster == "N/A") {
                Poster = "https://icon-library.com/images/unavailable-icon/unavailable-icon-23.jpg";
            }

            movieList.innerHTML += `
            <div class="card" data-id="${imdbID}">
                <div class="card-img">
                    <img src="${Poster}"
                        alt="Movie Picture" />
                </div>
                <div class="card-title">${Title}</div>
                <div class="card-read-more" onClick="viewMovieDetails(event)">Read More</div>
            </div>
            `
        });
    });
});

async function viewMovieDetails(event) {
    const cardElement = event.target.parentNode;
    const imdbID = cardElement.getAttribute("data-id");

    const URL = `https://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
    const response = await fetch(URL);
    const parsedResult = await response.json();

    const {Title, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, imdbRating, Poster} = parsedResult;

    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modal-close");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
                <div class="poster">
                    <img src="${Poster}" alt="Movie Poster">
                </div>
                <div class="details">
                    <h1 class="title">${Title}</h1>
                    <p class="info">Released: <span class="released-date">${Released}</span></p>
                    <p class="info">Runtime: <span class="runtime">${Runtime}</span></p>
                    <p class="info">Genre: <span class="genre">${Genre}</span></p>
                    <p class="info">Director: <span class="director">${Director}</span></p>
                    <p class="info">Writer: <span class="writer">${Writer}</span></p>
                    <p class="info">Actors: <span class="actors">${Actors}</span></p>
                    <p class="plot">Plot: <span class="plot-text">${Plot}</span></p>
                    <p class="info">Language: <span class="language">${Language}</span></p>
                    <p class="imdb-rating">IMDb Rating: <span class="rating">${imdbRating}</span></p>
                </div>
    `;

    modal.style.display = "block";

    modalClose.addEventListener("click", function() {
        modal.style.display = "none";
    });
}