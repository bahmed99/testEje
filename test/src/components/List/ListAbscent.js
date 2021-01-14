import React from 'react'
import List from './List.js'
function ListAbscent(props) {
    return (
        <div style={{display:props.displayListAbscent}} >
            {props.abscent.map((el,index) => 
              <List list={el} key={index}  />
            )}
        </div>
    )
}

export default ListAbscent
