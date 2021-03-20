
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdote.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))).sort((a, b) => b.votes - a.votes)
    return (
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        dispatch(vote(anecdote.id, anecdotes.find(a => a.id === anecdote.id)))
                        dispatch(newNotification(`you voted '${anecdote.content}'`, 10))
                    }
                    }
                />
            )}
        </div>
    )
}

export default AnecdoteList

