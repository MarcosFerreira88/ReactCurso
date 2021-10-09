import React,{useState,useEffect} from "react";
import data from "../../data/data.json";
import {Form} from 'react-bootstrap'
import Cards  from "react-bootstrap/Card";



const CharacterDetail=()=> {
 
  const[actual,setState]=useState(data.Characters[0]);

  const onChangeSelect = (event) => {
 setState(data.Characters.find(
  (element) => element.id === event.target.value))


  };
  useEffect( ()=> {
    console.log("El personaje se modifico")
},[onChangeSelect])
 
    return (
      <center>
      <div className="container-sm mt-3">

        <Form.Select class="custom-select"  style={{ width: '50rem' }}  onChange={(event) => {onChangeSelect(event);}}>

          {data.Characters.map((element) => (
          <option value={element.id}>
              {element.name + " " + element.heroname}
          </option>
          ))}
        </Form.Select>
        <Cards style={{ maxWidth: '800px' }} className="mt-3 mb-3">
        <Cards.Img variant="top" rounded src={actual.photo} max-width="200px" height="600px" />
        <Cards.Body>
          <Cards.Title>{actual.name}</Cards.Title>
          <Cards.Text>
          Edad: {actual.age}
          <br/>
          Ciudad: {actual.city}

          </Cards.Text>
        </Cards.Body>
        <Cards.Footer>
          <small className="text-muted">nombre de heroe: {actual.heroname}</small>
        </Cards.Footer>
      </Cards>
       </div>
       </center>
    );
  }
export default CharacterDetail;