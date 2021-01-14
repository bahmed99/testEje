import React from 'react'
import './ButtonsBottom.css';

function ButtonPresent(props) {
    return (
        <div>
            <button onClick={props.Start} className="btnend btnright"> {props.text}</button>
        </div>
    )
}

export default ButtonPresent
