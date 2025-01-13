
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'

function App() {
  const [weatherDetails, setWeatherDetails] = useState(null);

  return (
   <div>
    <Header/>
    <Search setWeatherDetails={setWeatherDetails}/>
    {weatherDetails && <WeatherCard/>}
    <Footer/>
   </div>
  )
}

export default App
