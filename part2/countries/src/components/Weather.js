import React from 'react'


const Weather = ({ weather, capital }) => {

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