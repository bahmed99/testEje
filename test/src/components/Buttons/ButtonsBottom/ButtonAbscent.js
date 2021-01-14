import React from 'react'
import './ButtonsBottom.css';

function ButtonAbscent(props) {
    return (
        <div>
            <button onClick={props.Start} className="btnend btnmiddle"> {props.text}</button>
        </div>
    )
}

export default ButtonAbscent
