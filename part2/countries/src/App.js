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


useEffect(() => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
}, [])

const filteredCountries  = countries.filter(country => country.name.toLowerCase().includes(filterValue.toLowerCase()))



const handleChange = (event) => {
  setInputValue(event.target.value)
  setFilterValue(event.target.value)
}

const handleClick = (event) => setFilterValue(event.target.value)

  return (
    <div>
    <InputForm inputValue={inputValue} handleChange={handleChange} />
      {filteredCountries.map(country => country).length === 1
      ? <><BasicData countries={filteredCountries} /><Weather country={filteredCountries} /></>
      : <Countries countries={filteredCountries} handleClick={handleClick} />
    }
    </div>
  )
}

export default App;
