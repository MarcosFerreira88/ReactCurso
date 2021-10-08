import React from "react";
import { useState } from "react";
import {Form,Row,Col, Container,Button} from 'react-bootstrap'

export function validacion(input){
    let errors = {}
    if(!input.email){
        errors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "Email must be a email"
    }
    if(!input.asunto){
        errors.asunto = "Asunto is required"
    } else if(Object.keys(input.asunto).length<10){
        errors.asunto = "Asunto debe escribir mas de 10 caracteres"
    }
    if(!input.mensaje){
        errors.mensaje = "Mensaje is required"
    } else if(Object.keys(input.mensaje).length>26){
        errors.mensaje = "debe escribir menos de 256 caracteres"
    }
    return errors;
}
const Formulario =(props)=> {
    const [state, setState] = useState({
        email: '',
        asunto: '',
        mensaje:''
    })

    const [fails, setFails] = useState({
            email: 'Email is Required',
            asunto: "Asunto is Required",
            mensaje:"Mensaje is Required"
    })
  

    function onSubmitForm(e){
            e.preventDefault();
            alert(`el correo es ${state.email} y el asunto es ${state.asunto}`)
    }

    function onHandleChange(e){
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
            
            setFails(
                validacion({
                    ...state, 
                    [e.target.name]: e.target.value
                    })
                )

}

    return (

    
        <Row>
            <Col></Col>
            <Col xs={8}>
        <div class="container mt-3 ">
            <p class="text-center text-uppercase text-light">Hola mi nombre es Marcos Ferreira y soy desarrollador backend</p>
            <p class="text-center text-italic text-uppercase text-light"> y tengo mucha experiencia en desarrollo con php y c# </p>
      
            <h1 className="text-center">Formulario de contacto</h1>
             <form onSubmit={(e) => onSubmitForm(e)} >
                 <div>
                    <label class="col-sm-2 col-form-label text-light"> Email </label>
                    <input
                        type="text"
                        class="form-control p-3"
                        name='email'
                        placeholder="Email"
                        value={state.email}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                       {fails.email ?
                    <div class="alert alert-danger" role="alert">
                  <p style={{color: 'red'}}> {fails.email}</p> 
                    </div>
                    : <p></p>
                    }
                    
                </div> 
                <div>
                    <label class="col-sm-2 col-form-label text-light"> Asunto </label>
                    <input
                        type="text"
                        class="form-control"
                        name='asunto'
                        placeholder="minimo 10 caracteres"
                        value={state.asunto}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                    {fails.asunto && 
                    <div class="alert alert-danger" role="alert">
                    <p style={{color: 'red'}}> {fails.asunto} </p>
                    </div>
                    }
                </div> 
                <div>
                    <label class="col-sm-2 col-form-label mt-3 text-light"> Mensaje </label>
                    <textarea
                        type="text"
                        class="form-control p-3 mb-3"
                        name='mensaje'
                        placeholder="maximo de 256 palabras"
                        value={state.mensaje}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                    {fails.mensaje && 
                    <div class="alert alert-danger" role="alert">
                    <p style={{color: 'red'}}> {fails.mensaje} </p>
                    </div>
                    }
                </div>
                <div>
                    <center>
                    <Button  type="submit" className="btn btn-primary btn-lg" disabled={ fails.email || fails.asunto|| fails.mensaje ? true : false  }>
                    Enviar
                    </Button>
                    </center>
                </div>
            </form>          
                  
              
                </div>
                </Col>
                <Col></Col>
        </Row>
        
        
      
                
           
       
    );
  
}

export default Formulario;


