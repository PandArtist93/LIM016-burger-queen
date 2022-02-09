import './historialCocinero.scss';
import Encabezado from '../../utils/encabezado/encabezado';
import DescargarPdf from '../../utils/botonDescarga/botonDescarga';
import ProductsTable from '../../utils/tablaPedidos/tablaPedidos';

const products = [ 
    {id: 1, name: "mozzarella", price: "2 s/", stock:"8"}, 
    {id:2, name:"gouda", price: "3 s/", stock:"6"}, 
    {id: 3, name: "cheddar", price: "4 s/", stock:"12"}
];
//products.sort();

const HistorialCocinero = () => {
    return  ( 
        <div >
            <h2>HISTORIAL PEDIDOS</h2>
            <Encabezado/>
            <ProductsTable products={ products } />
            <DescargarPdf/>
        </div>
    )
} 

export default HistorialCocinero