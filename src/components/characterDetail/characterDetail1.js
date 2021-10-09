import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import data from "../../data/data.json";
import {Button,Card} from 'react-bootstrap'
export default function CharacterDetail1(){

        const parametro = useParams();
        const history = useHistory();
        const location = useLocation();
            console.log(location)
        //     para redireccionar
        const redireccionamiento = () => {
                history.push("/")
        }
        var actual=data.Characters.find((element) => element.id === parametro.id)
        return (    

                <center>
                <Card style={{ width: '40rem' }} className="text-center mt-3">
                        <Card.Img variant="top" src={actual.photo} width="200" height="500px"/>
                        <Card.Body>
                        <Card.Title>{actual.name}</Card.Title>
                        <Card.Text>
                                <h3> Detalles del heroe</h3>
                                <p> nombre: {actual.name}</p>
                                <p> nombre de heroe: {actual.heroname}</p>
                                <p> Edad: {actual.age}</p>
                                <p> Ciudad: {actual.city}</p> 
                        </Card.Text>
                        <Button variant="primary" onClick={redireccionamiento}> REDIRECCIONAR AL HOME</Button>
                        </Card.Body>
                </Card>

                                {/* <div>
                                        <img src={actual.photo} width="200" alt="imagen"></img>
                                </div>
                                <h3> Detalles del heroe</h3>
                                <p> nombre: {actual.name}</p>
                                <p> nombre de heroe: {actual.heroname}</p>
                                <p> Edad: {actual.age}</p>
                                <p> Ciudad: {actual.city}</p>   */}
                    
                    
                               
                </center>
        )

}
