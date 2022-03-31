import React, { createContext, useState, useEffect } from 'react';
import { db } from '../../../../firebase/firebase-config';
import {
  getDocs, collection, query, where,
} from 'firebase/firestore';
import '../registroProductos.scss';
import { Children } from 'react/cjs/react.production.min';
import RegistroProductos from '../registroProductos';

export const UserProductContext = createContext();

function ProductProvider() {
/*   const productosData = {
    name: '',
    tipos: '',
    precio: 0,
    imagen: '',
    codigo: '',
    undsPorPlato: 0,
    descripcion: ''
  }; */

  const [productosData, setproductosData] = useState([]);
  const [tipos, setTipos] = useState('hamburguesas');

  // Obtener datos de Firebase por tipo
  const getProductos = async (tipo) => {
    const getDataProduct = [];
    const getData = await getDocs(query(collection(db, 'productos'), where('tipo', '==', tipo)));
    getData.forEach((doc) => {
      getDataProduct.push({ ...doc.data(), id: doc.id });
    });
    return getDataProduct;
  };

/*   useEffect(() => {
    getProduct().then((getDataProduct) => {
      setproductosData(getDataProduct)
    })
  }, [tipo]); */

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProductos(tipos);
      setproductosData(listMenu);      
    }
    fetchList();
  }, [tipos]);

  const totalesProps = {
    productosData, 
    setproductosData,
    tipos, 
    setTipos,
  };
    return (
        <UserProductContext.Provider value={totalesProps}>
          <RegistroProductos element={Children} />
        </UserProductContext.Provider>
      );
}

export default ProductProvider;
