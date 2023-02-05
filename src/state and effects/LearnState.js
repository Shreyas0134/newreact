import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LearnState = () => {

    const [data, setData] = useState();
   
   useEffect(()=>
   {
        
    axios.get('ttps://dummyjson.com/products/1').then((res)=>
    {
         setData(res.data)
    })

   },[])




    // function change() {
    //     setData(data + 1)
    // }

  



    return (
        <div>
            <h1>{data}</h1>
            <button className='btn btn-primary'>click here</button><br></br>
            <ul
                class="list-group"
                style={{
                    float: "left",
                    marginTop: "0rem",
                    marginLeft: "1rem",
                    height: "40%",
                    width: "17rem",
                }}>
                <li class="list-group-item">

                    Completely synergize
                </li>
                {<li class="list-group-item">{data[0].title}</li>}
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>


        </div>
    )
}

export default LearnState