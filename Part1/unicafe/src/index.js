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

const Statistic = (props) => {
  return(
    <>
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr> 
    </>
  )
}

const Statistics = (props) => {
  const goodScore = props.good * 1
  const badScore = props.bad * (-1)
  const neutralScore = props.neutral * 0
  const totalInput = props.good + props.neutral + props.bad
  const avg = (goodScore + neutralScore + badScore)/totalInput
  const positivePct = props.good / totalInput * 100 + ' %'

  if (totalInput === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <Statistic text = "good" value = {props.good} />
          <Statistic text = "neutral" value = {props.neutral} />
          <Statistic text = "bad" value = {props.bad} />
          <Statistic text = "all" value = {totalInput}/>
          <Statistic text = "average" value = {avg} />
          <Statistic text = "positive" value = {positivePct} />
        </tbody>
      </table>
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
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
