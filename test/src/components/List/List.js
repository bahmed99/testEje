import React from 'react'
import './List.css';


function List(props){
    
    return ( 
      <div className="affichage">
        <div className="container-affichage">
          <div className="type">
            <h3>{props.list[0]}</h3>
          </div>
          <div className="type">
            <h5>{props.list[1]}</h5>
          </div>
        </div>
    </div>
    );
  }

export default List
