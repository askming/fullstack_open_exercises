import React, {useState} from 'react'


// show country wrapper
const Countries = (props) => {
    const [showAll, setShowAll] = useState(true)
    const [countryToShow, setCountryToShow] = useState([])

    // show multiple counties with only country names
    const ShowCountryName = (props) =>{
        return(
            <div>
                {props.countries.map(country => 
                    <div key = {country.name}>{country.name} <button 
                        onClick = {() => {
                            setShowAll(!showAll) // event handler to show specific country when "show" button is clicked
                            setCountryToShow(country)
                        }
                        }>show
                        </button>
                    </div>)
                }
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
                <div>
                <button onClick = {() => {
                    setShowAll(true) // reset the event status so that it can start from original
                    setCountryToShow([])
                    }}>back
                </button>
                </div>
            </div>
        )
    }

    const CountriesToShow = showAll
    ? props.CountriesToShow
    : props.CountriesToShow.filter(country => country.name === countryToShow.name)

    // console.log(props.CountriesToShow.length)
    // console.log(showAll)
    // console.log(countryToShow)
    
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