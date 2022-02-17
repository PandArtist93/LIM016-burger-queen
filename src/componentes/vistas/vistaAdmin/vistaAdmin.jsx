import LogoAdmin from '../../../img/iconos/trajeAdmin.png';
import PE from '../../../img/iconos/PE.png';
import PP from '../../../img/iconos/PP.png';
import HV from '../../../img/iconos/HV.png';
import HE from '../../../img/iconos/HE.png';
import RP from '../../../img/iconos/RP.png';
import BH from '../../../img/iconos/botton-home.png';
import BS from '../../../img/iconos/botton-salir.png';
import { Link } from "react-router-dom";
import './vistaAdmin.scss';
import Navbar from '../../utils/navBar/navBar'

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className='logoSideBar'>
        <img src={LogoAdmin} alt= "logoAdmin"/>
      </div>
      <div className='dataUser'>
        <h4>NOMBRE</h4>
        <p>ADMINISTRADOR</p>
      </div>
      <ul>
        <li>
          <Link to='/admin/registro-personal'>
            <div className='SideBar-bottons'>
              <img src={RP} alt= "RP"/>
              <p>Registrar Personal</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/admin/historial-empleados'>
            <div className='SideBar-bottons'>
              <img src={HE} alt= "HE"/>
              <p>Historial de Empleados</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/admin/historial-ventas'>
            <div className='SideBar-bottons'>
              <img src={HV} alt= "HV"/>
              <p>Historial de Ventas</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/admin/pedidos-preparados'>
            <div className='SideBar-bottons'>
              <img src={PP} alt= "PP"/>
              <p>Pedidos Preparados</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/admin/pedidos-entregar'>
            <div className='SideBar-bottons'>
              <img src={PE} alt= "PE"/>
              <p>Pedidos para Entregar</p>
            </div>
          </Link>
        </li>               
      </ul>
      <div className='containerBotones'>
        <div className='bottons'>
          <button><Link to='/admin/registro/'><img src={BH} alt= "BH"/></Link></button>
        </div>
        <div className='bottons1'>
          <button><Link to='/'><img src={BS} alt= "BS"/></Link></button>          
        </div>
      </div>
    </div>
  )
}

function VistaAdmin(props) {
  return (       
    <div className="container">
      <Navbar/> 
      <div className='flex'>                
        <SideBar/>
        <div className='content'>
          {props.content}                            
        </div>                
      </div>       
    </div>          
  );
}

export default  VistaAdmin;