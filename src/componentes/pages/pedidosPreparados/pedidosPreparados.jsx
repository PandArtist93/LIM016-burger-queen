import './pedidosPreparados.scss';
import Pedido from '../../utils/pedido/pedido'
import BotonPreparado from '../../utils/botonPreparado/botonPreparado'

const detallePedidos = [ 
    {id: 1, cliente: "Pablo Bernal", hora: "12:35 PM", mesa:"4", items: [{producto: "hamburguesa", precio: "12.00", cantidad: "1"}, {producto: "Agua", precio: "5.00", cantidad: "1"}]}, 
    {id: 2, cliente: "Pablo Bernal", hora: "12:35 PM", mesa:"3", items: [{producto: "papas", precio: "10.00", cantidad: "1"}, {producto: "Agua", precio: "5.00", cantidad: "1"}]}, 
    {id: 1, cliente: "Pablo Bernal", hora: "12:35 PM", mesa:"4", items: [{producto: "hamburguesa", precio: "12.00", cantidad: "1"}, {producto: "Agua", precio: "5.00", cantidad: "1"}]}, 
    {id: 2, cliente: "Pablo Bernal", hora: "12:35 PM", mesa:"3", items: [{producto: "papas", precio: "10.00", cantidad: "1"}, {producto: "Agua", precio: "5.00", cantidad: "1"}]}, 
    {id: 1, cliente: "Pablo Bernal", hora: "12:35 PM", mesa:"4", items: [{producto: "hamburguesa", precio: "12.00", cantidad: "1"}, {producto: "Agua", precio: "5.00", cantidad: "1"}]}, 
    {id: 2, cliente: "Pablo Bernal", hora: "12:35 PM", mesa:"3", items: [{producto: "papas", precio: "10.00", cantidad: "1"}, {producto: "Agua", precio: "5.00", cantidad: "1"}]}, 
];

const getCardOrder = (detallePedidos) => {
  return detallePedidos.map(detallePedido => {
    return <div className='contenedorPedido'> 
      <Pedido key={detallePedido.id} orden={ detallePedido }/>
      <BotonPreparado key={detallePedido.id}/>
    </div>
  })   
}

const PedidosPreparados = () => {
  const cardList = getCardOrder(detallePedidos);
  return  ( 
    <div className="contenedorPedidos">
      <h2>PEDIDOS PREPARADOS</h2>
      <div className='gridResponsivePP'>
        { cardList }
      </div>
    </div>
  )
} 

export default PedidosPreparados