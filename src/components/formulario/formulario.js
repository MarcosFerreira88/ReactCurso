import React from "react";
import { useState } from "react";
import {Form,Col, Container,Button} from 'react-bootstrap'

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
            asunto: "Asunto is required",
            mensaje:"Mensaje is required"
    })
  

    function onSubmitForm(e){
            e.preventDefault();
            alert(`el usuario es ${state.email} y las password es ${state.asunto}`)
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

    
        <>
        <div class="container mt-3">
            <p class="text-center text-uppercase text-light">Hola mi nombre es Marcos Ferreira y soy desarrollador backend</p>
            <p class="text-center text-italic text-uppercase text-light"> y tengo mucha experiencia en desarrollo con php y c# </p>
        <div class="card card-container">
            <h1 className="text-center">Formulario de contacto</h1>
             <form onSubmit={(e) => onSubmitForm(e)} className="background=blue">
                 <div>
                    <label> Email </label>
                    <input
                        type="text"
                        class="form-control"
                        name='email'
                        placeholder="Email"
                        value={state.email}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                    {fails.email ? <p style={{color: 'red'}}> {fails.email}</p> : <p>Todo ok </p>}
                </div> 
                <div>
                    <label> Asunto </label>
                    <input
                        type="text"
                        class="form-control"
                        name='asunto'
                        placeholder="minimo 1 numero y 1 letra"
                        value={state.asunto}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                    {fails.asunto && <p style={{color: 'red'}}> {fails.asunto} </p>}
                </div> 
                <div>
                    <label> Mensaje </label>
                    <textarea
                        type="text"
                        class="form-control"
                        name='mensaje'
                        placeholder="maximo de 256 palabras"
                        value={state.mensaje}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                    {fails.mensaje && <p style={{color: 'red'}}> {fails.mensaje} </p>}
                </div>
                <div>
                    <Button type="submit" disabled={ fails.email || fails.asunto|| fails.mensaje ? true : false  }>
                    Enviar
                    </Button>
                </div>
            </form>          
                  
                </div>
                </div>
        </>
        
        
      
                
           
       
    );
  
}

export default Formulario;


