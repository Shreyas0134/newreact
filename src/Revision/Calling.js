import React from 'react'

const Calling = () => {
    const aaa='shreyas'
    let bbb=123;
    var obj={rno:'123',name:'shreyas'}
    var array=[1,2,3,4,5]

  return (
    <div>Calling
    <h1>{aaa}</h1>
    {bbb}
    {obj.rno}
    {obj.name}
    {array[0]}
    {array[1]}
    {array[2]}
    {array[3]}
    {array[4]}


 </div>

    

  )
}

export default Calling