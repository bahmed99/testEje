import React from 'react'
import './ButtonsAjouter.css'
function ButtonAjouterPresent(props) {
    return (
        <div>
            <button disabled={props.disabled}  onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} id="my-buttonp" style={{opacity: props.com ? 1 : 0.5 , cursor: props.com ? 'pointer': ''}} onClick ={props.Start} className="btnp" >{props.text}</button>
        </div>
    )
}

export default ButtonAjouterPresent
