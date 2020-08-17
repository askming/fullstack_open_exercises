import React, { useState, useEffect } from 'react'
import Person from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
// import axios from 'axios'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ successMessage, setSuccessMessage] = useState(null)
  const [ errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        // console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])
  // console.log('render', persons.length, 'persons')

  const NotificationSuccess = ({ message }) => {
    if (message === null) {
      return null
    }

    return(
      <div className = "success">
        {message}
      </div>
    )
  }

  const NotificationError = ({ message }) => {
    if (message === null) {
      return null
    }

    return(
      <div className = "error">
        {message}
      </div>
    )
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('buttone clicked', event.target)
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    const person = persons.find(p => p.name === personObject.name)
    const changedPerson = {...person, number: personObject.number}

    if (persons.some(n => n.name === personObject.name & n.number !== personObject.number)) {
      if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)){
        personService
        .update(changedPerson)
        .then(retunedPerons =>{
          setPersons(persons.map(person => person.name !== personObject.name ? person : personObject))
        // .finally(success => {
        setSuccessMessage(
          `Updated ${personObject.name}`
        )
        setTimeout(() =>{
          setSuccessMessage(null)
        }, 5000)
                // })
        })
        .catch(error => {
          setErrorMessage(
            `Information of ${personObject.name} has already been removed from server`
          )
          setTimeout(() =>{
            setErrorMessage(null)
          }, 5000)
        })
        // console.log(successMessage)
        setNewName('')
        setNewNumber('')
        }
      }

    else {
      personService
      .create(personObject)
      .then(returnedObject =>{
        setPersons(persons.concat(returnedObject))
      })
      .finally(success => {
        setSuccessMessage(
          `Added ${personObject.name}`
        )
        setTimeout(() =>{
          setSuccessMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const removeHandler = (id) =>{
    // {event.preventDefault()}
    // console.log('buttone clicked', event.target)
    const person = persons.find(p => p.id === id)
    // console.log(person)
    
    if (window.confirm(`Delete ${person.name} ?`)){
      personService
      .remove(person)

    setPersons(persons.filter(p => p.id !== id))
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

  // const handleRemoveId = (event) =>{
  //   console.log(event.target.value)
  //   setRemoveID(event.target.value)
  // }

  // create filtered subset of subjects using filter
  const personsToShow = persons.filter(person => person.name.includes(searchName))

  return (
    <div>
      <h2>Phonebook</h2>
      <NotificationSuccess message = {successMessage} />
      <NotificationError message = {errorMessage} />
        <Filter value = {searchName} handler = {handleSearchPerson} />
      <h3>add a new</h3>
        <PersonForm addPerson = {addPerson} name = {newName} namehandler = {handleNameChange} number = {newNumber} numberhandler = {handleNumberChange}/>
      <h3>Numbers</h3>
        {personsToShow.map((person) =>
          <Person key = {person.name} name = {person.name} number = {person.number} removePerson = {() => removeHandler(person.id)}/>
        )}
      </div>
    )
}

export default App
