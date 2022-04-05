//import React  from 'react';
import React, { useContext }  from 'react';
import "./registroProductos.scss";
import NavListProducts from "./components/navListProducts/navListProducts";
import ListProducts from "./components/listProducts/listProducts";
import FormProducto from "./components/formProducto/formProducto";
import { UserProductContext } from './context/useProductContext';
//import VistaPrevia from "./components/vistaPrevia/vistaPrevia";
//import BtnsConfirmarYCancelar from "./components/btnsConfirmarYCancelar/btnsConfirmarYCancelar";

function RegistroProductos() {
  const { editedProductData } = useContext(UserProductContext);
    
  return (
    <section className="marginFlex">
      <div className="contenedorProductos">
        <div className="navFiltradoProductos">
          <NavListProducts /> 
          <br/>
        </div>
        <div className="listaProductosCrud">
          <ListProducts />
        </div>
        <div className="formProductos">
          <FormProducto productData={editedProductData}/>
        </div>
      </div>
    </section>
  );
}
export default RegistroProductos;
