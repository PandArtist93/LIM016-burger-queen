import './pedidosPorPreparar.scss';
import {
  collection, query, where, getDocs, orderBy,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Pedido from '../../utils/pedido/pedido';
import BotonPreparar from '../../utils/botonPreparar/botonPreparar';
import { db } from '../../../firebase/firebase-config';
import LoadingSpinner from '../../utils/loading-spinner/loading-spinner';

function PedidosPorPreparar() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const ordersCollectionRef = query(collection(db, 'pedidos'), orderBy('timestamp', 'asc'), where('estado', '==', 'pendiente'));
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
    <div className="contenedorPedidosPorPreparar">
      <h2>PEDIDOS POR PREPARAR</h2>
      <div className="gridResponsivePP">
        {orders.map((order, index) => (
          <div className="contenedorPedido" key={index}>
            <Pedido key={order.id} orden={order} />
            <div className="contenedorBotones">
              <BotonPreparar info={order} key={`${index}-${order.id}`} loading={setIsLoading} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PedidosPorPreparar;
