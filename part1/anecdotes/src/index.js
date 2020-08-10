import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Headline = ({ text }) => <h1>{text}</h1>

const Display = ({anecdote, points}) => 
<>
<p>{anecdote}</p>
<p>has {points} votes</p>
</>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  
  const randomSelect= () =>
    setSelected(Math.floor(Math.random() * anecdotes.length))
  
  const updateVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }
 
  return (
    <div>
      <Headline text="Anecdote of the day" />
      <Display anecdote={props.anecdotes[selected]} points={points[selected]} />
      <Button handleClick={updateVote} text="vote" />
      <Button handleClick={randomSelect} text="next anecdote" />
      <Headline text="Anecdote with most votes" />
      <Display anecdote={props.anecdotes[points.indexOf(Math.max(...points))]} points={points[points.indexOf(Math.max(...points))]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


Math.floor(Math.random() * anecdotes.length)



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)