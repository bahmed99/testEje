import React from 'react'
import './ButtonCommencer.css';

function ButtonCommencer(props) {
    
    return (
        <div>
            <button onClick={props.Start} className="btncommencer" style={{display:props.displayBtnCommencer}} > {props.text} </button>
        </div>
    )
}

export default ButtonCommencer
