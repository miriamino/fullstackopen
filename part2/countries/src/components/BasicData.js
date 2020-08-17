import React from 'react'


const BasicData = ({ countries }) => {
  const country = countries[0]
return (
<>
<h1>{country.name}</h1>
<p>capital {country.capital}</p>
<p>population {country.population}</p>
<h2>Spoken languages</h2>
<ul>
  {country.languages.map(language => 
    <li key={language.iso639_1}>{language.name}</li>)}
</ul>
<img src={country.flag} alt={`${country.name} flag`} width='200'/>
</>
)
}

export default BasicData