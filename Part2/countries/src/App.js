import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries'



function App() {

  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response =>{
        // console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, []) 

  const handleSearchName = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }

  let countriesReturned = []
  if (searchName !== ''){
      countriesReturned = countries.filter(country => {
        const countryLowerCase = country.name.toLowerCase()
        const searchNameLowerCase = searchName.toLowerCase()
        return(countryLowerCase.includes(searchNameLowerCase))
    })
  }

  // console.log(countriesReturned.length)

  return (
    <div>
      <Filter value = {searchName} handler = {handleSearchName} />
      <Countries CountriesToShow = {countriesReturned}/> 
    </div>
  )
}

export default App;
