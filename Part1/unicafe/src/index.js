import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const SectionHead = ({head}) => {
  return(
    <div>
      <h1>{head}</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick = {props.handleClick}> {props.text} </button>
)

const Total = (props) => {
  return(
    <div>
      <p>{props.cat} {props.total}</p>
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <SectionHead head = 'give feedback'/>

      <Button handleClick = {handleGoodClick} text = 'good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>
      <Button handleClick = {handleBadClick} text = 'bad'/>

      <SectionHead head = 'statistics'/>
      <Total cat = 'good' total = {good}/>
      <Total cat = 'neutral' total = {neutral}/>
      <Total cat = 'bad' total = {bad}/>
      <Total cat = 'all' total = {good + neutral + bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
