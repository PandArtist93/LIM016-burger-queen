import React, { useContext } from 'react';
import './navListadoProductosPorPedir.scss';
import { images } from '../../constans/index';
import { UserContext } from '../../context/UserContext';

const NavListadoProductosPorPedir = () => {   
  const { setTipo } = useContext(UserContext);

  return (  
  <div className='BoxBtnsMenu'>
    <button type="button" onClick={() => setTipo("hamburguesas")} className="btnTipoMenu">
      <img src={images.hamburguesas} alt="tipo" />
    </button>
    <button type="button" onClick={() => setTipo("bebidas frias")} className="btnTipoMenu">
      <img src={images.bebidasFrias} alt="tipo" />
    </button>
    <button type="button" onClick={() => setTipo("bebidas calientes")} className="btnTipoMenu">
      <img src={images.bebidasCalientes} alt="tipo" />
    </button>
    <button type="button" onClick={() => setTipo("complementos")} className="btnTipoMenu">
      <img src={images.complementos} alt="tipo" />
    </button>
  </div>)
};

export default NavListadoProductosPorPedir;
