import React from 'react'
import './ButtonsAjouter.css'

function ButtonAjouterExclu(props) {
    return (
        <div>
             <button disabled={props.disabled}  onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} id="my-buttone" style={{opacity: props.com ? 1 : 0.5 , cursor: props.com ? 'pointer': ''}} onClick ={props.Start} className="btne" >{props.text}</button>
        </div>
    )
}

export default ButtonAjouterExclu
