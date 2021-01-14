import React from 'react'
import './ButtonLast.css'
import ButtonAbscent from './ButtonsBottom/ButtonAbscent';
import ButtonPresent from './ButtonsBottom/ButtonPresent';
import ButtonTous from './ButtonsBottom/ButtonTous';
function ButtonLast(props) {
    return (
        <div className="last-container">
            <ButtonTous text="TOUS" Start={props.startTous} /> 
            <ButtonAbscent  text="ABSCENT" Start={props.startAbscent} /> 
            <ButtonPresent  text="PRESENT" Start={props.startPresent} />
        </div>
    )
}

export default ButtonLast
