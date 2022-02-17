import Encabezado from '../../utils/encabezado/encabezado';
import './historialMesero.scss';
import DescargarPdf from '../../utils/botonDescarga/botonDescarga'
import ProductsTable from '../../utils/tablaPedidos/tablaPedidos';

const products = [ 
  {id: 1, codigo: "P00001", mesero: "M001", cocinero:"C001", pedido:"Ver detalle", monto:"S./ 105.05"}, 
  {id: 2, codigo: "P00002", mesero: "M002", cocinero:"C002", pedido:"Ver detalle", monto:"S./ 64.00"},  
  {id: 3, codigo: "P00003", mesero: "M001", cocinero:"C001", pedido:"Ver detalle", monto:"S./ 25.00"}, 
  {id: 4, codigo: "P00004", mesero: "M002", cocinero:"C001", pedido:"Ver detalle", monto:"S./ 25.00"}, 
  {id: 5, codigo: "P00005", mesero: "M001", cocinero:"C002", pedido:"Ver detalle", monto:"S./ 70.00"}, 
  {id: 6, codigo: "P00006", mesero: "M001", cocinero:"C001", pedido:"Ver detalle", monto:"S./ 105.05"}, 
  {id: 7, codigo: "P00007", mesero: "M003", cocinero:"C002", pedido:"Ver detalle", monto:"S./ 200.00"}, 
  {id: 8, codigo: "P00008", mesero: "M002", cocinero:"C001", pedido:"Ver detalle", monto:"S./ 80.00"}, 
  {id: 9, codigo: "P00009", mesero: "M003", cocinero:"C002", pedido:"Ver detalle", monto:"S./ 50.50"}, 
  {id: 10, codigo: "P00010", mesero: "M002", cocinero:"C001", pedido:"Ver detalle", monto:"S./ 30.00"}
];

const HistorialCocinero = () => {
  return  ( 
    <div>
    <h2>HISTORIAL PEDIDOS</h2>
      <Encabezado/>
      <ProductsTable products={ products } />
      <DescargarPdf/>
    </div>
  )
} 

export default HistorialCocinero