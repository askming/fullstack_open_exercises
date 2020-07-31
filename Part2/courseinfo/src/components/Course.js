import React from 'react';

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Course = ({course}) => {
    return(
      <div>
        <Header course = {course}/>
        {course.parts.map((part) =>
            <Part key = {part.id} part = {part}/>
        )}
        {<b>
            total of {course.parts.reduce((acc, cur) => acc + cur.exercises, 0)} exercises
        </b>}
      </div>
    )
  }

export default Course