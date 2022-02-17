import LogoMesero from '../../../img/iconos/mesero.png';
import PP from '../../../img/iconos/PP.png';
import RP from '../../../img/iconos/RP.png';
import HP from '../../../img/iconos/HP.png';
import BH from '../../../img/iconos/botton-home.png';
import BS from '../../../img/iconos/botton-salir.png';
import { Link } from "react-router-dom";
import './vistaMesero.scss';
import Navbar from '../../utils/navBar/navBar';
//import SideBar from '../../utils/sideBar/sideBar';
//import btnSideBarAdminMesero from '../../utils/sideBar/sideBar';

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className='logoSideBar'>
        <img src={LogoMesero} alt= "logoMesero"/>
      </div>
      <div className='dataUser'>
        <h4>NOMBRE</h4>
        <p>MESERO</p>
      </div>
      <ul>
        <li>
          <Link to='/mesero/realizar-pedido'>
            <div className='SideBar-bottons'>
              <img src={RP} alt= "RP"/>
              <p>Realizar Pedido</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/mesero/pedidos-entregar'>
            <div className='SideBar-bottons'>
              <img src={PP} alt= "PP"/>
              <p>Pedidos por Entregar</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/mesero/historial-pedidos'>
            <div className='SideBar-bottons'>
              <img src={HP} alt= "HP"/>
              <p>Historial de pedidos</p>
            </div>
          </Link>
        </li>
      </ul>
      <div className='containerBotones'>
        <div className='bottons'>
          <button><Link to='/mesero/registro/'><img src={BH} alt= "BH"/></Link></button>
        </div>
        <div className='bottons1'>
          <button><Link to='/'><img src={BS} alt= "BS"/></Link></button>          
        </div>
      </div>
    </div>
  )
}

function VistaMesero(props) {
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

export default  VistaMesero;
