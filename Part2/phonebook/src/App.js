import React, { useState } from 'react'

const Person = (props) =>{
  // console.log(props.name)
  return(
    <div>
      {props.name} {props.number}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('buttone clicked', event.target)
    
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(n => n.name === personObject.name & n.number === personObject.number)) {
      window.alert(`${personObject.name} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearchPerson = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.includes(searchName))

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input value = {searchName} onChange = {handleSearchPerson}/>
        </div>
      <h2>add a new</h2>
        <form onSubmit = {addPerson}>
          <div> 
            name: <input value = {newName} onChange = {handleNameChange}/>
          </div>  
          <div>
            number: <input value = {newNumber} onChange = {handleNumberChange}/>
          </div>  
          <div>
            <button type="submit">add</button>
          </div>  
        </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => 
        <Person key = {person.name} name = {person.name} number = {person.number}/>
      )}
    </div>
  )
}

export default App
