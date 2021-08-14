import React from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from "react-bootstrap"

function App() {
  const submit=async(event)=>{
    event.preventDefault()
    const name=event.target.name.value
    const meaning=event.target.meaning.value
    const explanition=event.target.explanition.value
    const wordData={
      name,
      meaning,
      explanition

    }
    console.log(wordData);
    await axios.post("http://localhost:5000/words",wordData)
    window.location.replace("/")

  }
  return (
    <Form onSubmit={submit}>
      <h1>Ururinta Ereyada Afsoomaliga ah</h1>
    <Form.Group className="mb-3" >
      <Form.Label>Word Name</Form.Label>
      <Form.Control type="text" placeholder="Gali halkan ereyga" name="name" />
      
    </Form.Group>
  
    <Form.Group className="mb-3" >
      <Form.Label>Meaning</Form.Label>
      <Form.Control type="text" placeholder="Gali halkan macnaha" name="meaning"/>
      
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Explanition</Form.Label>
      <Form.Control type="text" placeholder="Faahfaahin" name="explanition"/>
      
    </Form.Group>
    
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default App
