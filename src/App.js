import './styles.css';
import Pelicula from './components/Pelicula';
import peliculas from './json/peliculas.json';

function App() {
  return (
    <div>
      <header>
        <h1 id="Titulo">CARTELERA</h1>
      </header>
      <hr />
      {peliculas.map(peli =>
        <Pelicula
          img={peli.img}
          titulo={peli.titulo}
          actores={peli.actores}
          descripcion={peli.descripcion}
          duracion={peli.duracion}
          etiquetas={peli.etiquetas}
        ></Pelicula>)}
    </div>
  );
}

export default App;