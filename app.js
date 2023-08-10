let pagina = 1;
const anterior = document.getElementById("btnAnterior");
const siguiente = document.getElementById("btnSiguiente");

siguiente.addEventListener("click", () => {
  pagina += 1;
  cargarPeliculas();
});

anterior.addEventListener("click", () => {
  pagina -= 1;
  cargarPeliculas();
});

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ae6a99f137cd4da8d3a36e4b0439c487&language=es-MX&page=${pagina}`
    );

    console.log(respuesta);
    let peleiculas = "";
    if (respuesta.status == 200) {
      const datos = await respuesta.json();
      datos.results.forEach((nameMovies) => {
        peleiculas += `
        
        <div class= "pelicula">
        <img class="poster" src = "https://image.tmdb.org/t/p/w500${nameMovies.poster_path}"></img>
        </div>
        
        <h3 class="titulo" >${nameMovies.title}<h3/>
        
        
        `;
      });
      document.getElementById("contenedor").innerHTML = peleiculas;
      console.log(datos.results);
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
