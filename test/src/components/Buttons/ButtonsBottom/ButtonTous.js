import React from 'react'
import './ButtonsBottom.css'; 

function ButtonTous(props) {
    return (
        <div>
            <button onClick={props.Start} className="btnend btnleft"> {props.text}</button>
        </div>
    )
}

export default ButtonTous
