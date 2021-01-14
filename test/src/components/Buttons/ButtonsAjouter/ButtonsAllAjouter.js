import React from 'react'
import './ButtonsAjouter.css'
import ButtonAjouterPresent from './ButtonAjouterPresent';
import ButtonAjouterExclu from './ButtonAjouterExclu';
import ButtonAjouterAbscent from './ButtonAjouterAbscent';
function ButtonsAllAjouter(props) {
    return (
        <div className='btn'>
            <ButtonAjouterPresent  text="Présent" com={props.com} disabled={!props.com} Start={props.SetPresent}/>
            <ButtonAjouterExclu  text="Exclu" com={props.com} disabled={!props.com} Start={props.SetExclu}  />
            <ButtonAjouterAbscent  text="Abscent" com={props.com} disabled={!props.com} Start={props.SetAbscent}  />
        </div>
    )
}

export default ButtonsAllAjouter
