 import React from 'react'

 const Person = ({ person }) => <p>{person.name} {person.number}</p>

 const Persons = ({ persons, filterValue }) =>
        <>{persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())).map(person =>
            <Person key={person.name} person={person} />
        )}
        </>

export default Persons