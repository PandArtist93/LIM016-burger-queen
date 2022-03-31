import React from 'react';
import './navTablaPedido.scss';

function NavTablaResumenPedido() {
  return (
    <div className="navTablaPedido">
      <div className="productoRP">
        <p>Producto</p>
      </div>
      <div className="undsRP">
        <p>Unds</p>
      </div>
      <div className="precioRP">
        <p>S/.</p>
      </div>
      <div className="eliminarRP" />
    </div>
  );
}

export default NavTablaResumenPedido;
