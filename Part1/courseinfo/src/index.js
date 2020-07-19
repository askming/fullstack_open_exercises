import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exe}</p>
    </div>
  )
}

const Content = (props) => {
  // console.log(props)
  const part1 = props.parts[0]
  const part2 = props.parts[1]
  const part3 = props.parts[2]

  return (
    <>
      <Part name = {part1.name} exe = {part1.exercises}/>
      <Part name = {part2.name} exe = {part2.exercises}/>
      <Part name = {part3.name} exe = {part3.exercises} />
    </>
  )
}

const Total = (props) => {
  const part1 = props.parts[0]
  const part2 = props.parts[1]
  const part3 = props.parts[2]
  return (
    <div>
      <p> Number of exercise {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const App = () =>{
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
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
