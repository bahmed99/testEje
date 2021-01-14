import React from 'react'
import './ButtonsAjouter.css'

function ButtonAjouterAbscent(props) {
    return (
        <div>
            <button disabled={props.disabled}  onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} id="my-buttona" style={{opacity: props.com ? 1 : 0.5 , cursor: props.com ? 'pointer': ''}} onClick ={props.Start} className="btna" >{props.text}</button>
        </div>
    )
}

export default ButtonAjouterAbscent
