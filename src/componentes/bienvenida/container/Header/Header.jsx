import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className="app__header bienvenida__wrapper section__padding" id="home">
    <div className="bienvenida__wrapper_info">
      <SubHeading title="Página exclusiva para el personal" />
      <h1 className="app__header-h1">¡Bienvenidos a Karma!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Somos un restaurante dedicado a la preparación de mini hamburguesas y a la atención personalizada para el comensal. Ofrecemos un ambiente agadable y una receta especial que harán una explosión de sabores en tu paladar.  </p>
      {/* <button type="button" className="custom__button">Explore Menu</button> */}
    </div>

    <div className="bienvenida__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
