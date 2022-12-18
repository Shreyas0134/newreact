import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const FontIcons = () => {

    return (
        <div>
            <h1>FontIcons</h1>
            <div>
                <FontAwesomeIcon icon={faCoffee} style={{ height: '10rem' ,color:'red'}} />
                <FontAwesomeIcon icon={faFacebook} style={{ height: '10rem',color:'blue'}}/> 
               

            </div>
        </div>
    );

}

export default FontIcons;