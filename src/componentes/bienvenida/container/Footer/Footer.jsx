import React from 'react';
import { FiGithub, FiMessageSquare, FiLinkedin } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Dirección</h1>
        <p className="p__opensans">Calle Independencia 8497, Morelia, Michoacán, 58000</p>
        <p className="p__opensans">Delivery al:</p>
        <p className="p__opensans">+(01) 543 9000</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Proyecto elaborado con fines educativos | La empresa Karma no existe.&quot;</p>
        <img src={images.spoon} alt="" className="spoon__img" style={{ marginTop: 15 }} />
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Creadoras del Proyecto</h1>
        <p className="p__opensans">Marielena Aizaga</p>
        <div className="app__footer-links_icons">
          <a type="button" target="_blank" rel="noreferrer" href="https://github.com/PandArtist93"> <FiGithub /> </a>
          <a type="button" target="blank" rel="noreferrer" href="mailto:maizaga01@gmail.com"> <FiMessageSquare /> </a>
          <a type="button" target="blank" rel="noreferrer" href="https://www.linkedin.com/in/rosamaria-rodriguez-6904a1191/"> <FiLinkedin /> </a>
        </div>
        <p className="p__opensans">Rosamaria Rodriguez</p>
        <div className="app__footer-links_icons">
        <a type="button" target="_blank" rel="noreferrer" href="https://github.com/RJRCH123"> <FiGithub /> </a>
        <a type="button" target="blank" rel="noreferrer" href="mailto:rous9716@gmail.com"> <FiMessageSquare /> </a>
        <a type="button" target="blank" rel="noreferrer" href="https://www.linkedin.com/in/rosamaria-rodriguez-6904a1191/"> <FiLinkedin /> </a>
          
          
          
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans"> 2022 | Lima - Perú | Caracas - Venezuela</p>
    </div>

  </div>
);

export default Footer;
