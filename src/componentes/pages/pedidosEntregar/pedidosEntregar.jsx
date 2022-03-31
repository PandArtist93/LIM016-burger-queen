import React, { useState, useEffect } from 'react';
import {
  getDocs, collection, query, where, orderBy,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';
import './pedidosEntregar.scss';
import Pedido from '../../utils/pedido/pedido';
import BotonEntegar from '../../utils/botonEntregar/botonEntregar';
import LoadingSpinner from '../../utils/loading-spinner/loading-spinner';

function PedidosEntregar() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const ordersCollectionRef = query(collection(db, 'pedidos'), orderBy('timestamp', 'asc'), where('estado', '==', 'preparado'));
    const dataDocs = await getDocs(ordersCollectionRef);
    const pedidos = dataDocs.docs;
    const allOrders = [];
    pedidos.forEach((pedido) => {
      allOrders.push({ ...pedido.data(), id: pedido.id });
    });
    /* setOrders(allOrders); */
    return allOrders;
  };

  useEffect(() => {
    getOrders().then((allOrders) => {
      setIsLoading(false);
      setOrders(allOrders);
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <div className="contenedorPedidosEntregar">
      <h2>PEDIDOS POR ENTREGAR</h2>
      <div className="gridResponsivePE">
        {orders.map((order, index) =>
          // console.log(order.id);
          (
            <div className="contenedorPedido" key={index}>
              <Pedido key={order.id} orden={order} />
              <BotonEntegar info={order} loading={setIsLoading} /* key={order.id} *//>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PedidosEntregar;
