import SearchApiWeather from './SearchApiWeather';
import './ApiWeather.css';
function ApiWeather() {
  return (
    <div className="ApiWeather">
      <SearchApiWeather placeholder="Digite a Cidade..." />
    </div>
  );
}

export default ApiWeather;
