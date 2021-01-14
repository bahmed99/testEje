import React from 'react'
import List from './List.js'

function ListPresent(props) {
    return (
        <div style={{display:props.displayListPresent}} >
            {props.present.map((el,index) => 
              <List list={el} key={index}  />
            )}
        </div>
    )
}

export default ListPresent
