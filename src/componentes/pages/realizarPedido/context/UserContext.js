import React, { createContext, useState, useEffect } from 'react';
import { db } from '../../../../firebase/firebase-config';
import {
  getDocs, collection, query, where, addDoc, onSnapshot,
} from 'firebase/firestore';
import '../realizarPedido.scss';
import { Children } from 'react/cjs/react.production.min';
import RealizarPedido from '../RealizarPedido';

export const UserContext = createContext();

function UserProvider() {
  const clientes = {
    cliente: '',
    mesa: '',
  };

  const [cliente, setCliente] = useState('clientes');
  const [pedido, setPedido] = useState([]);
  const [datos, setDatos] = useState([]);
  /* const [isLoading, setIsLoading] = useState(true); */

  // filtro por tipo de producto
  const [productData, setProductData] = useState([]);
  const [tipo, setTipo] = useState('hamburguesas');

  // Obtener datos de Firebase por tipo
  const getProduct = async (tipo) => {
    const getDataProduct = [];
    const getData = await getDocs(query(collection(db, 'productos'), where('tipo', '==', tipo)));
    getData.forEach((doc) => {
      getDataProduct.push({ ...doc.data(), id: doc.id });
    });
    return getDataProduct;
  };

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProduct(tipo);
      /* setIsLoading(false); */
      setProductData(listMenu);      
    }
    fetchList();
  }, [tipo]);

  // boton agregar y quitar
  const plus = (id) => {
    const arrayPlus = pedido.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item));
    setPedido(arrayPlus);
  };

  const less = (id) => {
    const arrayLess = pedido.reduce((acc, item) => {
      if (item.id === id) {
        const newCount = item.count - 1;
        if (newCount <= 0) {
          return acc;
        }
        acc.push({ ...item, count: item.count - 1 });
        return acc;
      }
      acc.push(item);
      return acc;
    }, []);
    setPedido(arrayLess);
  };

  // calcular precio total por pedido
  const precioTotal = pedido.map((element) => (element.precio * element.count));
  const reducer = (precioAnterior, precioActual) => precioActual + precioAnterior;
  const totalOrder = precioTotal.reduce(reducer, 0);
  const total = totalOrder.toFixed(2);

  // boton agregar envia data a resumen de pedido
  const agregarPedido = (order) => {
    const orderList = {
      id: order.id,
      name: order.name,
      precio: order.precio,
      count: 1,
      codigoProducto: order.codigo,
    };

    if (pedido.find((item) => order.id === item.id)) {
      plus(order.id);
    } else {
      setPedido([...pedido, orderList]);
    }
  };

  // limpiar orden con boton cancelar
  const limpiarOrden = () => {
    setPedido([]);
    setCliente(clientes);
  };

  // eliminar contenido de orden
  const eliminar = (tacho) => {
    const eliminarProducto = pedido.filter((item) => item.id !== tacho);
    setPedido(eliminarProducto);
  };

  // agregar ordenes al firebase
  const confirmarOrdenesF = () => {
    if (cliente.mesa !== '' && cliente.cliente !== '' && cliente.mesa !== undefined && cliente.cliente !== undefined) {
      const collectionOrder = addDoc(collection(db, 'pedidos'), {
        cliente: cliente.cliente,
        estado: 'pendiente',
        mesa: cliente.mesa,
        orden: pedido,
        timestamp: new Date(),
        total,
      }).then(() => {
        setPedido([]);
        setCliente(clientes);
      });
      return collectionOrder;
    }

    return false;
  };

  useEffect(() => {
    onSnapshot(
      collection(db, 'pedidos'),
      (snapshot) => {
        const ordenes = snapshot.docs.map((orden) => ({ ...orden.data(), id: orden.id }));
        setDatos(ordenes);
      },
    );
  }, []);

  const totalProps = {
    cliente,
    setCliente,
    pedido,
    setPedido,
    datos,
    plus,
    less,
    total,
    agregarPedido,
    confirmarOrdenesF,
    eliminar,
    productData,
    setProductData,
    limpiarOrden,
    precioTotal,
    tipo,
    setTipo,
  };

  return (
    <UserContext.Provider value={totalProps}>
      <RealizarPedido element={Children} />
      {/* <RealizarPedido>{Children}</RealizarPedido> */}
    </UserContext.Provider>
  );
}

export default UserProvider;
