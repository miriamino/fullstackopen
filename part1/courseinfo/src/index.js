import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>
  <h1>{props.course.name}</h1>

const Part = (props) =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = (props) =>
  <>
    {props.parts.map((part) => <p><Part part={part} /></p>)}
  </>

const Total = (props) =>
  <p>Number of exercises {props.parts.reduce((a, b) => a + b.exercises, 0)}</p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))