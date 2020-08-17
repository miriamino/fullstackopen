import React from 'react'

const Country = ({ country, handleClick }) => (
<>
  {country.name} 
  <button onClick={handleClick} value={country.name}>show</button><br /></> 
)

const Countries = ({countries, handleClick}) => {
  const tooMany = countries.map(country => country).length > 10
  return (
  <>
  { tooMany
    ? <p>Too many matches, specify another filter</p>
    : countries.map(country => 
      <div key={country.numericCode}>
        <Country country={country} handleClick={handleClick} />
      </div>)
  }
  </>
  )
}

export default Countries