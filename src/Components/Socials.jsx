import React from 'react';
import { SVGSource, SVG } from '../Asssets/Sprite.jsx'
import "../CSS/Socials.css";

function Socials() {
    return ( 
        <div id="socials" className="socials">
            <h2 className='mobile'>Follow Me</h2>
            <SVGSource/>
            <div className="container">
            <h4 className='center'>MIKE BOURNE</h4>
            <div className="icon-container">
            <a href="https://www.youtube.com/channel/UCGIEVBnKyBSYsJJq-PAHpew">
                <SVG id='youtube'/>
            </a>
            <a href="https://www.instagram.com/mikebournofficial/">
                <SVG id='instagram'/>
            </a>
            <a href="https://www.facebook.com/mike.bourn.1">
                <SVG id='facebook'/>
            </a>
            <a href="https://twitter.com/home">
                <SVG id='twitter'/>
            </a>
            </div>

            </div>
        </div>
     );
}

export default Socials;