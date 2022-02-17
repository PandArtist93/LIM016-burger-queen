import React from 'react';
import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => (
  <div className="app__aboutus bienvenida__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Cocinero</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Bienvenido talentoso cocinero, en Karma estamos encantados por tu gran labor para la comunidad karmática. En esta página encontrarás las siguientes secciones que te ayudarán en nuestro dia a dia: Pedidos por preparar, pedidos preparados e historial de pedidos.  </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Mesero</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Bienvenido cordial mesero, en Karma estamos encantados por tu gran labor para la comunidad karmática. En esta página encontrarás las siguientes secciones que te ayudarán en nuestro dia a dia: Realizar pedido, pedidos por entregar e historial de pedidos.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
