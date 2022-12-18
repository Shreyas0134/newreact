import React from 'react'

const HocSecond = (props) => {
  return (
    <div style={{backgroundColor:'red'}}>
    <center>
    Second components
    <props.a/>

        </center>
</div>
  )
}

export default HocSecond