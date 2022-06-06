import React from 'react';
import "../CSS/Merch.css";
import shirt from "../Asssets/living-t.png"

function Merch() {
    return ( 
        <div id="merch" className="merch">
            <h2 className='mobile'>Exclusive Merchandise</h2>
            <div className="text-container"><h2>COMING SOON</h2></div>
            <div className="media-container"><img src={shirt} alt="Aint Living Right T-Shirt"/>                    
            <div className="text-container">
                        <h5>Aint Living Right</h5> 
                        <p>T-Shirt</p>
                    </div>
                </div>
        </div>
     );
}

export default Merch;