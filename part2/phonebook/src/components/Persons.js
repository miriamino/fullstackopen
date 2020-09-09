 import React from 'react'

const Person = ({ person, removePerson }) => <>{person.name} {person.number} <button onClick = {() => removePerson(person)}>delete</button><br /></>

 const Persons = ({ persons, filterValue, removePerson }) =>
        <>{persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())).map(person =>
            <Person key={person.id} person={person} removePerson= {removePerson} />
        )}
        </>

export default Persons