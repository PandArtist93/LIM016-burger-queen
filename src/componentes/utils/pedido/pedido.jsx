// import React, { useEffect, useState } from 'react';
import './pedido.scss';
import ProductosPedido from './productosPedido';

const dateParser = (date) => date.toLocaleString(); // fecha y hora local

function Pedido({ orden }) {  
  // eslint-disable-next-line
         
  return (
    <div className="boxPedido" id={orden.id}>
      <div className="headerPedido">
        <div className="detallePedido">
          <div className="dataCliente">
            <div className="dato1">
              <h5>Cliente:</h5>
              <p>{orden.cliente}</p>
            </div>
            <div className="dato1">
              <h5>Entrada:</h5>
              <p>{dateParser(orden.timestamp.toDate())}</p>
            </div>
          </div>
          <div className="dato2">
            <h5>N° Mesa:</h5>
            <p>{orden.mesa}</p>
          </div>
        </div>
        <ProductosPedido key={orden.id} orden={orden.orden} />
        <div className="totalPedido">
          <p>Total</p>
          <p>
            {'S/. '}
            {orden.total}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pedido;
