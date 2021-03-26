
import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const useField = (name) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
      setValue('')
  }
  const formElements = {name, value, onChange}

  return {
    name,
    value,
    onChange,
    reset,
    formElements
  }
}

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  const getAll = useEffect(() => {
    axios.get(baseUrl).then(response =>
      setResources(response.data))
    // return resources
  }, [baseUrl])

  const create = (resource) => {
    axios.post(baseUrl, resource).then(response => setResources(resources => [...resources, response.data]))
  }

  // const update = async (id, newObject) => {
  //   const response = await axios.put(`${ baseUrl } /${id}`, newObject)
  //   return response.data
  // }

  const service = {
    getAll, create
  }

  return [
    resources, service
  ]
}

const App = () => {
  const content = useField('text')
  const name = useField('text')
  const number = useField('text')

  const [notes, noteService] = useResource('http://localhost:3005/notes')
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
    content.reset()
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value })
    name.reset()
    number.reset()
  }

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content.formElements} />
        <button>create</button>
      </form>
      {notes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name.formElements} /> <br />
        number <input {...number.formElements} />
        <button>create</button>
      </form>
      {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
    </div>
  )
}

export default App