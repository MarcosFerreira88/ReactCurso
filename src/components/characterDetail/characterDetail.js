import React,{useState,useEffect} from "react";
import data from "../../data/data.json";

<<<<<<< HEAD

const CharacterDetail=()=> {
 
  const[actual,setState]=useState(data.Characters[0]);

 

  const onChangeInput = (event) => {
 setState(data.Characters.find(
  (element) => element.id === event.target.value))
=======
export default class characterDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      Actual: data.Characters[0],
    };
  }
  onChangeSelect = (event) => {
    this.setState(() => {
      return {
        Actual: data.Characters.find(
          (element) => element.id == event.target.value
        ),
      };
    });
>>>>>>> c06abf88ff57ffede3fea88910b7456a56490555
  };
  useEffect( ()=> {
    console.log("El personaje se modifico")
},[onChangeInput])
 
    return (
      <div >
<<<<<<< HEAD
       
                    
                   
                    
               
        <select onChange={(event) => {onChangeInput(event);}}>
=======
        <select onChange={(event) => {this.onChangeSelect(event);}}>
>>>>>>> c06abf88ff57ffede3fea88910b7456a56490555
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
<<<<<<< HEAD


export default CharacterDetail;
=======
}
>>>>>>> c06abf88ff57ffede3fea88910b7456a56490555
