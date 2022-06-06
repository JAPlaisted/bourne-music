import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../CSS/Nav.css";

const Nav = () => {
    return ( 
    <nav className="nav">
      <ul className="list nav__list container">
        <li className="nav__item"><HashLink smooth to="/#music">MUSIC</HashLink></li>
        <li className="nav__item"><HashLink smooth to="/#merch">MERCH</HashLink></li>
        <li className="nav__item"><HashLink smooth to="/#contact">CONTACT</HashLink></li>
        <li className="nav__item"><HashLink smooth to="/bio">BIO</HashLink></li>
      </ul>
    </nav>
     );
}
 
export default Nav;