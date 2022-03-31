import "./registroProductos.scss";
import NavListProducts from "./components/navListProducts/navListProducts";
import ListProducts from "./components/listProducts/listProducts";
import FormProducto from "./components/formProducto/formProducto";
import VistaPrevia from "./components/vistaPrevia/vistaPrevia";
import BtnsConfirmarYCancelar from "./components/btnsConfirmarYCancelar/btnsConfirmarYCancelar";
import { useState } from "react";

function RegistroProductos() {
  const [editMode, setEditMode] = useState(false);

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
          <FormProducto />
        </div>
        <div className="vistaPreviaProducto">
          <VistaPrevia />
        </div>
        <div className="btnsConfirmarYCancelar">
          <BtnsConfirmarYCancelar />
        </div>
      </div>
    </section>
  );
}
export default RegistroProductos;
