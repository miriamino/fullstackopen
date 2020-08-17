import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'



const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterValue, setFilterValue] = useState('')

    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }, [])

    const addPerson = (event) => {
        persons.map(person => person.name).includes(newName)
            ? window.alert(`${newName} is already added to phonebook`)
            : event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
    }

    const handleNameForm = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberForm = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterInput = (event) => {
        setFilterValue(event.target.value)
    }




    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filterValue} onChange={handleFilterInput} />
            <h2>add a new</h2>
            <PersonForm onSubmit={addPerson} nameValue={newName} numberValue={newNumber} nameChange={handleNameForm} numberChange={handleNumberForm} />
            <h2>Numbers</h2>
            <Persons persons={persons} filterValue={filterValue} />            
        </div>
    )
}

export default App