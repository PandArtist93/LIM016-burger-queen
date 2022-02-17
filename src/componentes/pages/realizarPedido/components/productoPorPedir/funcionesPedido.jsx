/* import { createContext, useState } from "react";

export const GlobalContext = createContext();

const UserProvider = (props) => { 
const [pedido, setPedido] = useState([]);
// +1
const plus = (id) => {
  const arrayPlus = pedido.map((item) => item.id === id ? {...item, count:item.count + 1}:item)
 setPedido(arrayPlus)
} 
// -1
const less = (id) => {
  const arrayPlus = pedido.map((item) => item.id === id ? {...item, count:item.count - 1}:item)
 setPedido(arrayPlus)
} 
// calcular precio total por pedido
const precioTotal = pedido.map(element => (element.precio*element.count))
const reducer = (precioAnterior, precioActual) => precioActual + precioAnterior;
const total = precioTotal.reduce(reducer, 0)

// eliminar por producto 
const eliminar = (tacho) => {
  const eliminarProducto = pedido.filter((item)=>item.id !== tacho)
  setPedido(eliminarProducto)
}

// borrar orden
const limpiarOrden = () => {
  setPedido([]); 
}
const borrarOrden = () => {
  limpiarOrden()
}

const propsGeneral = {
  borrarOrden, limpiarOrden, eliminar, 
  total, less, plus, pedido, setPedido, 
}

return (
  <GlobalContext.Provider value={propsGeneral}>
    {props}
  </GlobalContext.Provider>
)}

export default UserProvider; */