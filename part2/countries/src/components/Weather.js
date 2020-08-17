import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState([])
    const capital = country[0].capital
    const api_key = process.env.REACT_APP_API_KEY
    const weatherUrl = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query='

      useEffect(() => {
          const url = weatherUrl + capital
          axios
              .get(url)
              .then(response => {
                  setWeather(response.data.current)
              })
      }, [weatherUrl, capital])

    return (
        <div>
            <h2>{`Weather in ${capital}`}</h2>
            <b>temperature:</b><>{` ${weather.temperature} Celsius`}</><br />
            <img src={weather.weather_icons} alt={weather.weather_descriptions} /><br />
            <b>wind:</b><>{` ${weather.wind_speed} mph direction ${weather.wind_dir}`}</>
        </div>
    )
}

export default Weather