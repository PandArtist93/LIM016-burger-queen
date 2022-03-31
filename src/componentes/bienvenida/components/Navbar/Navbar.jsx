import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.scss';

function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/#home">Sobre Nosotros</a></li>
        <li className="p__opensans"><a href="/#about">Información</a></li>
        <li className="p__opensans"><a href="/#menu">La Carta</a></li>
        <li className="p__opensans"><a href="/#awards">Reconocimientos</a></li>
        <li className="p__opensans"><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/#home" onClick={() => setToggleMenu(false)}>Sobre Nosotros</a></li>
              <li><a href="/#about" onClick={() => setToggleMenu(false)}>Información</a></li>
              <li><a href="/#menu" onClick={() => setToggleMenu(false)}>La Carta</a></li>
              <li><a href="/#awards" onClick={() => setToggleMenu(false)}>Reconocimientos</a></li>
              <li><Link to="/login" onClick={() => setToggleMenu(false)}>Iniciar Sesión</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
