import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputForm from './components/InputForm'
import Countries from './components/Countries'
import BasicData from './components/BasicData'
import Weather from './components/Weather'


const App = () => {
  const [countries, setCountries] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [capital, setCapital] = useState('')
  const [weather, setWeather] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  const weatherUrl = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query='
  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filterValue.toLowerCase()))

  useEffect(() => {
    const url = weatherUrl + capital
    axios
      .get(url)
      .then(response => {
        setWeather(response.data.current)
      })
  }, [weatherUrl, capital])

useEffect(() => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
}, [])

const handleChange = (event) => {
  setInputValue(event.target.value)
  setFilterValue(event.target.value)
}

const handleClick = (event) => setFilterValue(event.target.value)

  return (
    <div>
    <InputForm inputValue={inputValue} handleChange={handleChange} />
      {filteredCountries.map(country => country).length === 1
      ? <><BasicData countries={filteredCountries} /><Weather weather={weather} capital={capital} /></>
      : <Countries countries={filteredCountries} handleClick={handleClick} />
    }
    </div>
  )
}

export default App;
