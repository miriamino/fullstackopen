import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'



const NewAnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const AddAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
    }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={AddAnecdote}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default NewAnecdoteForm
