import React, { createContext, useState, useEffect } from 'react';
import { db } from '../../../../firebase/firebase-config';
import { getDocs, collection, query, where, addDoc, onSnapshot} from 'firebase/firestore';
import { BtnsCancelarYConfirmar, NavRealizarPedido, ProductoPorComprar, ProductoPorPedir } from '../components';
import NavListadoProductosPorPedir from '../components/navListadoProductosPorPedir/navListadoProductosPorPedir';
import NavTablaResumenPedido from '../components/navTablaResumenPedido/navTablaPedido';
import PrecioTotal from '../components/precioTotal/precioTotal';
import '../realizarPedido.scss';

export const UserContext = createContext();

const UserProvider = () => {
  const clientes = {
    cliente: '',
    mesa: ''
  }

  const [ cliente, setCliente ] = useState('clientes');
  const [ pedido, setPedido ] = useState([]);
  const [ datos, setDatos ] = useState([]);

  // filtro por tipo de producto
    const [productData, setProductData] = useState([]);
    const [tipo, setTipo] = useState("hamburguesas");

  // Obtener datos de Firebase por tipo
    const getProduct = async(tipo) => {
      const getDataProduct = []
      const getData = await getDocs(query(collection(db, "productos"), where("tipo", "==", tipo)))
      getData.forEach((doc) => {
          getDataProduct.push({...doc.data(), id:doc.id})
        })
        return getDataProduct
    }
  
    useEffect(() => {
      async function fetchList() {
        const listMenu = await getProduct(tipo);
        setProductData(listMenu)
      }
      fetchList();
    }, [tipo]);

    
  // boton agregar y quitar
  const plus = (id) => {
    const arrayPlus = pedido.map((item) => item.id === id ? {...item, count:item.count + 1}:item)
    setPedido(arrayPlus)
  } 

  const less = (id) => {
    
    /* const arrayLess = pedido.forEach(item => {
      if(item.count > 0){
        item.count=item.count - 1;
      }
      else if (item.count === 0){
        eliminar(item.id)
      }
    }); */
    const arrayLess = pedido.map((item) => item.id === id ? {...item, count:item.count - 1}:item)
    setPedido(arrayLess)
  } 

  // calcular precio total por pedido
  const precioTotal = pedido.map(element => (element.precio * element.count))
  const reducer = (precioAnterior, precioActual) => precioActual + precioAnterior;
  const totalOrder = precioTotal.reduce(reducer, 0)
  const total = totalOrder.toFixed(2)

  // boton agregar envia data a resumen de pedido
  const agregarPedido = (order) => {
    const orderList = {
      id: order.id,
      name: order.name,
      precio: order.precio,
      count: 1,
      codigoProducto: order.codigo
    } 

    if (pedido.find((item) => order.id === item.id)) {
      plus(order.id)
    }
    setPedido([...pedido, orderList])
  }

  // limpiar orden con boton cancelar
   const limpiarOrden = () => {
    setPedido([]);
    setCliente(clientes)
  }

  // eliminar contenido de orden
  const eliminar = (tacho) => {
    const eliminarProducto = pedido.filter((item)=>item.id !== tacho)
    setPedido(eliminarProducto)
  }

  // agregar ordenes al firebase
  const confirmarOrdenesF = () => {
    const collectionOrder = addDoc(collection(db, "pedidos"), {
      cliente: cliente.cliente,
      estado: 'pendiente',
      mesa: cliente.mesa,
      orden: pedido,
      timestamp: new Date(),
      total: total
    }).then(() => {
      setPedido([]);
      setCliente(clientes);
    });
    return collectionOrder
  }

  useEffect(() => {
    onSnapshot(collection(db, 'pedidos'),
    (snapshot) => {
      const ordenes = snapshot.docs.map((orden)=> {
        return {...orden.data(), id: orden.id}; 
      })
      setDatos(ordenes)
    }
    )
  }, []);

  
  const totalProps = {
    cliente, setCliente, pedido, setPedido, datos,
    plus, less, total, agregarPedido, confirmarOrdenesF, eliminar, 
    productData, setProductData, limpiarOrden, precioTotal,
    tipo, setTipo
  };

  return (
    <UserContext.Provider value={totalProps} >
      <div className="containerRP">
        <div className="navRealizarPedido">
          <NavRealizarPedido />
        </div>
        <div className="navListadoProductosPorPedir">
          <NavListadoProductosPorPedir />
        </div>
        <div className="navTablaResumenPedido">
          <NavTablaResumenPedido />
        </div>
        <div className="listadoProductosPorPedir">
          <ProductoPorPedir />
        </div>
        <div className="resumenPedidosPorComprar">
          <ProductoPorComprar />
        </div>
        <div className="precioTotal">
          <PrecioTotal />
        </div>
        <div className="btnsCancelarYConfirmar">
          <BtnsCancelarYConfirmar />
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default UserProvider;
