import React from 'react'
import './ButtonsAjouter.css'

function ButtonAjouterAbscent(props) {
    let buttona = document.getElementById("my-buttona");

    function ChangeOpacityAbscent(){
    if(props.com)
    buttona.style.opacity=0.5 ; 
    }
    function ChangeOpacityAbscent1(){
    if(props.com)
    buttona.style.opacity=1 ; 
    }       
    return (
        <div>
            <button disabled={props.disabled}  onMouseOver={ChangeOpacityAbscent} onMouseOut={ChangeOpacityAbscent1} id="my-buttona" style={{opacity: props.com ? 1 : 0.5 , cursor: props.com ? 'pointer': ''}} onClick ={props.Start} className="btna" >{props.text}</button>
        </div>
    )
}

export default ButtonAjouterAbscent
