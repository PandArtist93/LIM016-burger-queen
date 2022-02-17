import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/firebase-config';
import { getDocs, collection, query, where } from 'firebase/firestore';
import './pedidosEntregar.scss';
import Pedido from '../../utils/pedido/pedido'
import BotonEntegar from '../../utils/botonEntregar/botonEntregar'

const detallePedidos = [ 
  {id: 2, cliente: "Maria Camacho", hora: "3:15 PM", mesa:"1"},
  {id: 3, cliente: "Cristhian Hernandez", hora: "4:02 PM", mesa:"2"},
  {id: 2, cliente: "Maria Camacho", hora: "3:15 PM", mesa:"1"},
  {id: 3, cliente: "Cristhian Hernandez", hora: "4:02 PM", mesa:"2"},
  {id: 2, cliente: "Maria Camacho", hora: "3:15 PM", mesa:"1"},
  {id: 3, cliente: "Cristhian Hernandez", hora: "4:02 PM", mesa:"2"}
];


const getCardOrder = () => {
/*   const [getOrderData, setGetOrderData] = useState([]);

  const getProduct = async() => {
    const getDataProduct = []
    const getData = await getDocs(query(collection(db, "pedidos")))
    getData.forEach((doc) => {
        getDataProduct.push({...doc.data(), id:doc.id})
      })
      return getDataProduct
  }

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProduct();
      setGetOrderData(listMenu)
    }
    fetchList();
  }, []); */

    return (
      <div className='gridResponsivePE' >
        {detallePedidos.map(detallePedido => {
        return <div className='contenedorPedido'> 
            <Pedido key={detallePedido.id} orden={ detallePedido }/>
            <BotonEntegar key={detallePedido.id}/>
          </div>
        })}
      </div>
    )
};

const PedidosEntregar = () => {  
  const cardList = getCardOrder(detallePedidos);
  return  ( 
    <div className="contenedorPedidosEntregar">
      <h2>PEDIDOS POR ENTREGAR</h2>
      <div /* className='gridResponsivePE' */>
        { cardList }
      </div>
    </div>
  )
} 

export default PedidosEntregar