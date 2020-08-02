import React from 'react'

// show multiple counties with only country names
const ShowCountryName = (props) =>{
    return(
        <div>
            {props.countries.map(country => <div key = {country.name}>{country.name}</div>)}
        </div>
    )
}

// show one country with country details
const ShowCountryDetail = (props) =>{
    const country = props.country[0]
    // console.log(country.languages)
    return(
        <div>
            <h1>{country.name}</h1>
            <div> captial {country.capital} </div>
            <div>population {country.population}</div>

            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key = {language.iso639_1}>{language.name}</li>)}
            </ul>
            <div>
                <img 
                    src = {country.flag} 
                    alt = {country.name}
                    height = "100"/>
            </div>
        </div>
    )
}

// show country wrapper
const Countries = (props) => {
    const CountriesToShow = props.CountriesToShow
    // console.log(CountriesToShow.length)
    
    if (CountriesToShow.length > 10) {
        return (<div>Too many matches, specify another filter </div>)
    }
    else if (CountriesToShow.length > 1) {
        return(
            <ShowCountryName key = {CountriesToShow.name} countries = {CountriesToShow}/>
        )
    }
    else if (CountriesToShow.length === 1) {
        return(
            <ShowCountryDetail country = {CountriesToShow} />
        )
    }
    else {
        return (<div></div>)
    }
    
}

export default Countries