import React from 'react'
import ListTous from './ListTous';
import ListAbscent from './ListAbscent';
import ListPresent from './ListPresent';

function ListEtudiant(props) {
    if(props.displayListTous==='contents'){return <ListTous displayListTous={props.displayListTous} tous={props.tous}  />}
    if(props.displayListAbscent==='contents'){return <ListAbscent displayListAbscent={props.displayListAbscent} abscent={props.abscent} />}
    if(props.displayListPresent==='contents'){return <ListPresent displayListPresent={props.displayListPresent} present={props.present} />}
}
export default ListEtudiant
