import React from 'react'

const Persons = (props) => {
    const Person = (props) => {
      return(
        <div>{props.name} {props.number}</div>
      )
    }
  
    return(
      <div>
        {props.personsToShow.map(person => 
          <Person key = {person.name} name = {person.name} number = {person.number} />
        )}
      </div>
    )
  }

export default Persons