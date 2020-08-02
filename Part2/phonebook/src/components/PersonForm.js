import React from 'react'

const PersonForm = (props) => {
    return(
      <form onSubmit = {props.addPerson}>
        <div> 
          name: <input value = {props.name} onChange = {props.namehandler}/>
        </div>    
        <div>
          number: <input value = {props.number} onChange = {props.numberhandler}/>
        </div>  
        <div>
          <button type="submit">add</button>
        </div>  
      </form>
    )
  }

export default PersonForm