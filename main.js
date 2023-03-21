const API_URL = `https://api.themoviedb.org/3/movie/550?api_key=1b1d919beb81e6dce99310523e5836cc`

const searchInput = document.getElementById('search-input');
const moviesList = document.getElementById('movies-list');

// Función para realizar la búsqueda de películas
async function searchMovies() {
  // Obtener el valor del input de búsqueda
  const query = searchInput.value;

  // Realizar la petición a la API de Películas MovieDB
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b1d919beb81e6dce99310523e5836cc&query=${query}`);

  // Convertir la respuesta a formato JSON
  const data = await response.json();

  // Limpiar la sección de películas
  moviesList.innerHTML = '';

  // Mostrar los detalles de cada película en la sección de películas
  data.results.forEach(movie => {
    const { poster_path, title, overview } = movie;
    const movieElement = document.createElement('div');
    movieElement.innerHTML = `
    <div class="card" style="width: 18rem;" id="card">
      <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="card-img-top" alt="${title}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${overview}</p>
      </div>
    </div>`;
    moviesList.appendChild(movieElement);
  });
}