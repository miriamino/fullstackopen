import React from 'react'


const Header = ({ course }) => (
    <h2>{course.name}</h2>
  )


const Total = ({ course }) => (
    <b>total of {course.parts.reduce((sum, ex) => sum + ex.exercises, 0)} exercises</b>
  )

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ course }) => (
    <>
      {course.parts.map((part) =>
        <Part key={part.id} part={part} />
      )}
    </>
  )

const Course = ({ course }) => (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )

export default Course