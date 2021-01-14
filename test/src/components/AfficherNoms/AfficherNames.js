import React from 'react'
import ButtonCommencer from '../Buttons/ButtonCommencer/ButtonCommencer';
import './AfficherNoms.css'
function AfficherNames(props) {
    return (
        <div className="names">
            <ButtonCommencer text="COMMENCER" Start={props.start} displayBtnCommencer={props.ok} /> 
            <h4>{props.names}</h4>
          </div>
    )
}

export default AfficherNames
