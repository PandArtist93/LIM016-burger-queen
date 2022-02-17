import React from "react";
import {
  Routes, 
  Route
} from "react-router-dom";

import Bienvenida from "./componentes/bienvenida/Bienvenida";
import VistaAdmin from './componentes/vistas/vistaAdmin/vistaAdmin';
import VistaCocinero from './componentes/vistas/vistaCocinero/vistaCocinero';
import VistaMesero from './componentes/vistas/vistaMesero/vistaMesero';
import Login from './componentes/login/login';
import Inicio from './componentes/Inicio/inicio';
import FormAdmin from "./componentes/login/loginFormAdm";
/* import FormEmploye from "./componentes/login/loginFormEmploye"; */
import RegistroEmpleado from './componentes/pages/registroUsuario/registrarEmpleado';
import PedidosPorPreparar from './componentes/pages/pedidosPorPreparar/pedidosPorPreparar';
import PedidosPreparados from './componentes/pages/pedidosPreparados/pedidosPreparados';
import PedidosEntregar from './componentes/pages/pedidosEntregar/pedidosEntregar';
import HistorialVentas from './componentes/pages/historialVentas/historialVentas';
import HistorialEmpleados from './componentes/pages/historialEmpleados/historialEmpleados';
import HistorialCocinero from './componentes/pages/historialCocinero/historialCocinero';
import HistorialMesero from './componentes/pages/historialMesero/historialMesero';
/* import RealizarPedido from './componentes/pages/realizarPedido/RealizarPedido' */
import Carta from './componentes/bienvenida/container/Menu/carta';
/* import Pedido from './componentes/utils/pedido/pedido' */
import UserProvider from "./componentes/pages/realizarPedido/context/UserContext";

function App() {
  return (
    <div className="App">
      <Routes>
                
        <Route path='/admin/registro-personal' element={<VistaAdmin content={<RegistroEmpleado/>}/>}/>
        <Route path='/admin/pedidos-preparados' element={<VistaAdmin content={<PedidosPreparados/>}/>}/>
        <Route path='/admin/historial-ventas' element={<VistaAdmin content={<HistorialVentas/>}/>}/>
        <Route path='/admin/historial-empleados' element={<VistaAdmin content={<HistorialEmpleados/>}/>}/>
        <Route path='/admin/pedidos-entregar' element={<VistaAdmin content={<PedidosEntregar />}/>}/>
        <Route path='/admin/*' element={<VistaAdmin content={<Inicio/>}/>}/>

        <Route path='/cocinero/pedidos-por-preparar' element={<VistaCocinero content={<PedidosPorPreparar/>} />}/>
        <Route path='/cocinero/pedidos-preparados' element={<VistaCocinero content={<PedidosPreparados/>} /> }/>
        <Route path='/cocinero/historial-pedidos' element={<VistaCocinero content={<HistorialCocinero/>}/>}/>
        <Route path='/cocinero/*' element={<VistaCocinero content={<Inicio/>}/>}/>

        {/* <Route path='/mesero/realizar-pedido' element={<VistaMesero content={<RealizarPedido />} />}/> */}
        <Route path='/mesero/realizar-pedido' element={<VistaMesero content={<UserProvider />} />}/>
        <Route path='/mesero/pedidos-entregar' element={<VistaMesero content={<PedidosEntregar/>}/>}/>
        <Route path='/mesero/historial-pedidos' element={<VistaMesero content={<HistorialMesero/>} />}/>
        <Route path='/mesero/*' element={<VistaMesero content={<Inicio/>}/>}/>

        <Route path='/bienvenida' element={<Bienvenida/>}/> 
        {/* <Route path='/employe' element={<Login form={<FormEmploye/>}/>}/> */}
        <Route path='/login' element={<Login form={<FormAdmin/>} />}/> 
        <Route path='/carta' element={<Carta/>}/>      
        <Route path='/' element={<Bienvenida/>}/>

      </Routes>
    </div>      
  );
}

export default App;