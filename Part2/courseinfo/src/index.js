import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

// const Total = ({ course }) => {
//   const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
//   return(
//     <p><b>total of {sum} exercises</b></p>
//   ) 
// }

const Total = ({ course }) => {
  const total = course.parts.reduce(
    (acc, cur) => acc + cur.exercises, 0
    )
  return(
    <div>
      <b> 
        total of {total} exercises
      </b>
    </div>
  ) 
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return(
    <div>
      <Course course = {course} />
      <Total course = {course} />
      {/* <p> total of {total} exerice </p> */}
    </div>
  ) 
}

ReactDOM.render(<App />, document.getElementById('root'))