import React from 'react'
import './ButtonsAjouter.css'
function ButtonAjouterPresent(props) {
    const buttonp = document.getElementById("my-buttonp");
    function ChangeOpacityPresent(){
        if(props.com)
        buttonp.style.opacity=0.5 ; 
      }
      function ChangeOpacityPresent1(){
        if(props.com)
        buttonp.style.opacity=1 ; 
      }


    return (
        <div>
            <button disabled={props.disabled}  onMouseOver={ChangeOpacityPresent} onMouseOut={ChangeOpacityPresent1} id="my-buttonp" style={{opacity: props.com ? 1 : 0.5 , cursor: props.com ? 'pointer': ''}} onClick ={props.Start} className="btnp" >{props.text}</button>
        </div>
    )
}

export default ButtonAjouterPresent
