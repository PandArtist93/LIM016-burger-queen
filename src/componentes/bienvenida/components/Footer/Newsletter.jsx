import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Ayudanos con la Mejora de Servicio" />
      <h1 className="headtext__cormorant">Sugerencias y Reclamos</h1>
      <p className="p__opensans">La opinión de nuestra comunidad es importante. El envío de su mensaje es confidencial y anónimo.</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Escriba su sugerencia y reclamo" />
      <button type="button" className="custom__button">Enviar</button>
    </div>
  </div>
);

export default Newsletter;
