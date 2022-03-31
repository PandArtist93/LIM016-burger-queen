import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.scss';

function AwardCard({ award: { imgUrl, title, subtitle } }) {
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
}

function Laurels() {
  return (
    <div className="bienvenida__bg bienvenida__wrapper section__padding" id="awards">
      <div className="bienvenida__wrapper_info">
        <SubHeading title="Premios & Reconocimiento" />
        <h1 className="headtext__cormorant">Empleados del Mes</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
        </div>
      </div>

      <div className="bienvenida__wrapper_img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  );
}

export default Laurels;
