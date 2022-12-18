import React from "react";
import './Card.css';

const NewCard = () => {
    const show = () => {
        alert('New Card')
    }
    return (
         <div className="first">
        <div className="card">
        <center>

            <h1><center>Card</center></h1>


            <hr></hr>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et d olore magna aliqua. Ut enim ad mi nim veniam, quis nostrud exercitati on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fug iat nulla pariatur. Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className='btn btn-danger'  onClick={show}>Next</button>
            </center>
        </div>
        
        </div>

    )
}
export default NewCard;
