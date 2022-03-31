import './historialCocinero.scss';
import {
  collection, getDocs, where, query, orderBy,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Encabezado from '../../utils/encabezado/encabezado';
import ProductsTable from '../../utils/tablaPedidos/tablaPedidos';
import { db } from '../../../firebase/firebase-config';
import Descarga from '../../utils/botonDescarga/botonDescarga';
import LoadingSpinner from '../../utils/loading-spinner/loading-spinner';

const dateParser = (date) => date.toLocaleDateString();

const hora = (data) => data.toLocaleTimeString();

function HistorialCocinero() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const getOrder = async () => {
    const allOrders = [];
    const orderCollecRef = query(collection(db, 'pedidos'), orderBy('timestamp', 'asc'), where('estado', '==', 'finalizado'));
    const data = await getDocs(orderCollecRef);

    data.docs.forEach((doc) => {
      const values = doc.data();
      allOrders.push({
        id: doc.id,
        timestamp: dateParser(values.timestamp.toDate()),
        hora: hora(values.timestamp.toDate()),
        cliente: values.cliente.toUpperCase(),
        pedido: 'Ver detalle',
        estado: values.estado,
        total: values.total.toUpperCase(),
      });
    });
    return allOrders;
  };

  useEffect(() => {
    getOrder().then((allOrders) => {
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
    <section className="paddingFlex">
      <h2>HISTORIAL PEDIDOS</h2>
      <Encabezado />
      <ProductsTable products={orders} estado={setOrders} loading={setIsLoading} />
      <Descarga />
    </section>
  );
}

export default HistorialCocinero;
