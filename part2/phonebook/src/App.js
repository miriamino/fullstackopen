import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'



const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const [notificationMessage, setNotificationMessage] = useState(null)
    const [className, setClassName] = useState('')

    useEffect(() => {
    personService
        .getAll()
        .then(initialNotes => {
            setPersons(initialNotes)
        })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.map(person => person.name).includes(newName)) {
            if (window.confirm(`"${newName}" is already added to phonebook, replace old number with a new one?`)) {
                const person = persons.find(p => p.name === newName)
                const changedNumber = { ...person, number: newNumber }
                personService
                    .update(person.id, changedNumber).then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
                        setNewName('')
                        setNewNumber('')
                        setNotificationMessage(`Number of "${newName}" replaced`)
                        setClassName('notification')
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, 5000)
                    })
                    .catch(error => {
                        setNotificationMessage(`Information of "${newName}" has already been removed from server`)
                        setClassName('error')
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, 5000)
                        setPersons(persons.filter(p => p.name !== newName))
                    })

            }
        } else {        
        const personObject = {
            name: newName,
            number: newNumber
        }
        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
                setNotificationMessage(`Added "${newName}"`)
                setClassName('notification')
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 5000)
                })
    }}
    const removePerson = person => {
        if (window.confirm(`Delete ${person.name}?`)) {
        personService
            .remove(person.id)
            .then(() => setPersons(persons.filter(p => p.id !== person.id)))
            .catch(error => {
                setNotificationMessage(`Information of "${person.name}" has already been removed from server`)
                setClassName('error')
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 5000)
                setPersons(persons.filter(p => p.name !== person.name))
            })
            
    }}

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
            <Notification message={notificationMessage} className={className} />
            <Filter value={filterValue} onChange={handleFilterInput} />
            <h2>add a new</h2>
            <PersonForm onSubmit={addPerson} nameValue={newName} numberValue={newNumber} nameChange={handleNameForm} numberChange={handleNumberForm} />
            <h2>Numbers</h2>
            <Persons persons={persons} filterValue={filterValue} removePerson={removePerson} />            
        </div>
    )
}

export default App