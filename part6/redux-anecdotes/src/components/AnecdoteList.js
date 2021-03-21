
import React from 'react'
import { connect } from 'react-redux'
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

const AnecdoteList = (props) => {
    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        props.vote(anecdote.id, props.anecdotes.find(a => a.id === anecdote.id))
                        props.newNotification(`you voted '${anecdote.content}'`, 10, props.timerID)
                    }
                    }
                />
            )}
        </div>
    )
}



const mapStateToProps = (state) => {

    return {
        anecdotes: state.anecdote.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a, b) => b.votes - a.votes),
        timerID: state.notification.timerID
    }

}

const mapDispatchToProps = {
    vote,
    newNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)