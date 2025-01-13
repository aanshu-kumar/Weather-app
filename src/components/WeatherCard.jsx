import "../App.css"
import clouds from "../assets/weather-cloudy.png"
const WeatherCard = ({weatherDetails}) => {
  let data = weatherDetails;
  return (
    <div className="weather-card">
      <img src={clouds}></img>
      <p className="temp">{data.current.temp_c}°C</p>
      <div className="other-data">
        <p>🌈 {data.current.humidity} 🌥️ {data.current.cloud}</p>
        <p>{data.location.name}, {data.location.region},{data.location.country}</p>
      </div>
    </div>
  )
}

export default WeatherCard