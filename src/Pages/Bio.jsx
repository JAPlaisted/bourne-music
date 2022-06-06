import React from 'react';
import "../CSS/Bio.css";
import { Link } from "react-router-dom";


function Bio() {
    return ( 
        <div id="bio" className='bio'>
            
            <div className="container">
            <Link  to="/"> <p>HOME</p></Link>
                <h4 className='center'>About</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa asperiores omnis fugiat, nesciunt voluptatem enim at modi error eaque excepturi atque impedit deserunt amet est blanditiis eos voluptatibus nobis sapiente nemo quo! Impedit tempore molestias sit natus provident, necessitatibus ab magni quis iure ratione nam, placeat porro vitae nisi? Ea illum harum ad perferendis vel molestiae nam placeat quo, repudiandae nulla enim debitis possimus, tempore alias! Tenetur molestiae asperiores dolorem iure. Non at alias voluptatem? Autem veniam dolore reiciendis id facilis enim officiis commodi, eaque asperiores itaque hic maiores debitis, quae accusantium eum obcaecati consequuntur veritatis a. Ullam nihil consequatur repellat similique quisquam aspernatur cum asperiores iste numquam, incidunt aliquid consequuntur rerum reprehenderit facere, quos necessitatibus sunt quasi suscipit laboriosam a laudantium voluptas, nostrum adipisci vel. Ducimus voluptatem sit culpa explicabo eum, sed veritatis amet voluptates quidem? Eum fugiat voluptas accusantium, voluptatum culpa, quae error perspiciatis, voluptatem rem natus qui eligendi ipsum expedita porro! Minima porro quis eum possimus reiciendis blanditiis ipsam inventore officiis saepe, dicta ipsa et dolores sed a asperiores placeat doloremque esse? Quae omnis pariatur dolore officia quis illo blanditiis? Aut non inventore qui dolor ipsum, est dolores laudantium eveniet exercitationem iusto pariatur ipsam fuga. Laudantium.</p>
            </div>
        </div>
     );
}

export default Bio;