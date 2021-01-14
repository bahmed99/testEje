import React from 'react'
import './ButtonsAjouter.css'

function ButtonAjouterExclu(props) {
    let buttone = document.getElementById("my-buttone");
    function ChangeOpacityExclu(){
        if(props.com)
        buttone.style.opacity=0.5 ; 
      }
      function ChangeOpacityExclu1(){
        if(props.com)
        buttone.style.opacity=1 ; 
      }
    return (
        <div>
             <button disabled={props.disabled}  onMouseOver={ChangeOpacityExclu} onMouseOut={ChangeOpacityExclu1} id="my-buttone" style={{opacity: props.com ? 1 : 0.5 , cursor: props.com ? 'pointer': ''}} onClick ={props.Start} className="btne" >{props.text}</button>
        </div>
    )
}

export default ButtonAjouterExclu
