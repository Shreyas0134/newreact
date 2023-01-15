import axios from "axios";
import { React, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";


const NewJason = () => {
  const [data, setData] = useState()

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
  })


    return (
      <div style={{width:'30%'}}>
      <ListGroup>
      <strong>
            <ListGroup.Item>
             userName data
            </ListGroup.Item>
          </strong> 
          <ListGroup.Item>{data[0].name}</ListGroup.Item>
          <ListGroup.Item>{data[0].email}</ListGroup.Item>
          <ListGroup.Item>{data[0].username}</ListGroup.Item>

          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>

           <ListGroup.Item>{data[1].name}</ListGroup.Item>
          <ListGroup.Item>{data[1].email}</ListGroup.Item>
          <ListGroup.Item>{data[1].username}</ListGroup.Item>


          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>

          <ListGroup.Item>{data[2].name}</ListGroup.Item>
          <ListGroup.Item>{data[2].email}</ListGroup.Item>
          <ListGroup.Item>{data[2].username}</ListGroup.Item>  


        </ListGroup>

      </div>
    );
};

export default NewJason;