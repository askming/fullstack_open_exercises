import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick = {props.handleClick}> {props.text} </button>
)
  
const Section = (props) => (
  <div>
    <h1>{props.text}</h1>
  </div>
)

const App = (props) => {
  const len = props.anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState(new Array(len+1).join('0').split('').map(parseFloat))
  
  const handleSelected = () => {
    // generate a random number b/t 0 and length of input text of anecdotes
    const randomNumber = Math.floor(Math.random() * len)
    // console.log(randomNumber)
    setSelected(randomNumber)
  }

  const handleVoted = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVoted(copy)
  }
  // console.log(votes)

  const MostVoted = (props) => {
    const most = votes.indexOf(Math.max(...votes))
    // console.log(votes)
    // console.log(Math.max(...votes))
    if (Math.max(...votes) === 0) {
      return (
        <></>
      )
    }
    return (
    <> 
      <p>{props.anecdotes[most]}</p>
      <p>has {votes[most]} votes</p>
     </> 
    )
  }

  return (
    <div>
      <Section text = "Anecdote of the day"/>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick = {handleVoted} text = "vote"/>
      <Button handleClick = {handleSelected} text = "next anecdote"/>

      <Section text = "Anecdote with most votes"/>
      <MostVoted anecdotes = {anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)