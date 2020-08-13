import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        // console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  // console.log('render', persons.length, 'persons')

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
      axios
        .post('http://localhost:3002/persons', personObject)
        .then(response =>{
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
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

  // create filtered subset of subjects using filter
  const personsToShow = persons.filter(person => person.name.includes(searchName))

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value = {searchName} handler = {handleSearchPerson} />
      <h3>add a new</h3>
        <PersonForm addPerson = {addPerson} name = {newName} namehandler = {handleNameChange} number = {newNumber} numberhandler = {handleNumberChange}/>
      <h3>Numbers</h3>
        <Persons personsToShow = {personsToShow}/>
    </div>
  )
}

export default App
