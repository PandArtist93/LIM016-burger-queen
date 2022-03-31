import './pedidosPreparados.scss';
import {
  collection, query, where, getDocs, orderBy,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Pedido from '../../utils/pedido/pedido';
import { db } from '../../../firebase/firebase-config';
import LoadingSpinner from '../../utils/loading-spinner/loading-spinner';

function PedidosPreparados() {
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
    <div className="contenedorPedidos">
      <h2>PEDIDOS PREPARADOS</h2>
      <div className="gridResponsivePP">
        {orders.map((order, index) => (
          <div className="contenedorPedido" key={index}>
            <Pedido key={order.id} orden={order} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PedidosPreparados;