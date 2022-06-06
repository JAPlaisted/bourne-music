import React from 'react';
import { SVGSource, SVG } from '../Asssets/Sprite.jsx'
import "../CSS/Music.css";
import Clyde from "../Asssets/KeithClyde.jpg"


const Music = () => {
     return(
        <div>
            <SVGSource/>
            <div id="music" className='music'>
                <div className="media-container">
                    <h2 className='mobile'>New Releases</h2>
                    <img src={Clyde} alt="Keith Clyde Album Cover"/>
                    <div className="text-container">
                        <h5>Keith Clyde</h5> 
                        <p>Latest Release ✘ Album</p>
                    </div>
                </div>
                <div className="container">
                    <h2>Keith Clyde Album</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum vero nam ab tempora quidem ea, earum minima voluptates, ad, quis eius excepturi odit. Nihil incidunt amet mollitia ab ex exercitationem a itaque quo, quaerat assumenda, doloremque consequuntur quisquam velit, in ea tempore. Laudantium expedita modi laborum eum ad dolorum, iure voluptas accusamus, commodi corrupti esse, omnis inventore incidunt sequi?</p>
                    <div className="icon-container">
                        <a href="https://open.spotify.com/artist/7cMdZvqd2S3sstWplvpKdg">
                            <SVG id='spotify'/>
                        </a>
                        <a href="https://music.apple.com/us/album/keith-clyde/1609726388?uo=4">
                            <SVG id='apple-music'/>
                        </a>
                        <a href="https://www.amazon.com/gp/product/B09SBVB5CR">
                            <SVG id='amazon-music'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
};

export default Music;