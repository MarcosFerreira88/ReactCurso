import React,{useState,useEffect} from "react";
import data from "../../data/data.json";


const CharacterDetail=()=> {
 
  const[actual,setState]=useState(data.Characters[0]);

 

  const onChangeInput = (event) => {
 setState(data.Characters.find(
  (element) => element.id === event.target.value))
  };
  useEffect( ()=> {
    console.log("El personaje se modifico")
},[onChangeInput])
 
    return (
      <div >
       
                    
                   
                    
               
        <select onChange={(event) => {onChangeInput(event);}}>
          {data.Characters.map((element) => (
          <option value={element.id}>
              {element.name + " " + element.heroname}
          </option>
          ))}
        </select>
        <br/>
        <div>
          <div>
            <img src={actual.photo} width="200" alt="imagen"></img>
          </div>
          <h3> Detalles del heroe</h3>
          <p> nombre: {actual.name}</p>
          <p> nombre de heroe: {actual.heroname}</p>
          <p> Edad: {actual.age}</p>
          <p> Ciudad: {actual.city}</p>         
        </div>
      </div>
    );
  }


export default CharacterDetail;