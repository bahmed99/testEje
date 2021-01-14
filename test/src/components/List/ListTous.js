import React from 'react'
import List from './List.js'

function ListTous(props) {
    return (
        
             <div style={{display:props.t}} >
            {props.tous.map((el,index) => 
              <List list={el} key={index}  />
            )}
        </div>
        
    )
}

export default ListTous
