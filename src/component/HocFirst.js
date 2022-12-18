import React from 'react'

const HocFirst = (props) => {
  return (
    <div style={{backgroundColor:'blueviolet'}}>
    <center>
    <h2>First component</h2>
    <props.cmp/>
    
   
    </center>
    
    </div>
  )
}

export default HocFirst