import React from 'react';
import BKGRND from "../Asssets/MBMusic-BKGRND.mp4";

function BkGrnd() {
    return ( 
        <video autoPlay muted loop className="bkgrnd">
        <source src={BKGRND} type="video/mp4" />
      </video>
     );
}

export default BkGrnd;