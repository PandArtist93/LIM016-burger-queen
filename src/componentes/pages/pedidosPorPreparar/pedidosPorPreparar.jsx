import './pedidosPorPreparar.scss';
import Pedido from '../../utils/pedido/pedido'
import BotonPreparar from '../../utils/botonPreparar/botonPreparar'

const detallePedidos = [ 
  {id: 1, cliente: "Andres Gómez", hora: "1:35 PM", mesa:"2"}, 
  {id: 2, cliente: "Ana Martin", hora: "2:35 PM", mesa:"4"} 
];

const getCardOrder = (detallePedidos) => {
  return detallePedidos.map(detallePedido => {
    return <div className='contenedorPedido'> 
      <Pedido key={detallePedido.id} orden={ detallePedido }/>
      <BotonPreparar/>
    </div>
  }) 
}
const PedidosPorPreparar = () => {

  const cardList = getCardOrder(detallePedidos);
  return  ( 
    <div className="contenedorPedidosPorPreparar">
      <h2>PEDIDOS POR PREPARAR</h2>
      <div className='gridResponsivePP'>
        { cardList }
      </div>
    </div>
  )
} 

export default PedidosPorPreparar