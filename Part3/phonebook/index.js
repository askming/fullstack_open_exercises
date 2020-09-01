const express = require("express")
const app = express()

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 4
    },
    {
        name: "Dan Abramov",
        numberid: "12-43-234345",
        id: 3
    }, 
    {
        name: "Mary Poppendieck",
        numberid: "39023-6423122",
        id:4
    }


]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const  person = persons.find(person => {
        // console.log(typeof id, id, typeof person.id, person.id)
        return person.id === id
    })

    if (person){
        response.json(person)
    }
    else{
        response.status(404).end()
    }
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})