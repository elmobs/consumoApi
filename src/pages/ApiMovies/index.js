import { useEffect, useState} from 'react';
import apiMovies from '../../services/apiMovies';
import { Link } from 'react-router-dom';
import './apiMovies.css';

function ApiMovies(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadFilmes(){
      const response = await apiMovies.get("movie/now_playing", {
        params:{
         api_key: "28fc232cc001c31e8a031f419d0a14ca",
         language: "pt-BR",
         page: 1,
        }
      })

      setFilmes(response.data.results.slice(0, 10))
      setLoading(false);

    }

    loadFilmes();

  }, [])

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default ApiMovies;