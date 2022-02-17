import LogoCocinero from '../../../img/iconos/chefCocinero.png';
import PP from '../../../img/iconos/PP.png';
import pp from '../../../img/iconos/pp2.png';
import HP from '../../../img/iconos/HP.png';
import BH from '../../../img/iconos/botton-home.png';
import BS from '../../../img/iconos/botton-salir.png';
import { Link } from "react-router-dom";
import './vistaCocinero.scss';
import Navbar from '../../utils/navBar/navBar'

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className='logoSideBar'>
        <img src={LogoCocinero} alt= "logoCocinero"/>
      </div>
      <div className='dataUser'>
        <h4>NOMBRE</h4>
        <p>JEFE COCINERO</p>
      </div>
      <ul>
        <li>
          <Link to='/cocinero/pedidos-por-preparar'>
            <div className='SideBar-bottons'>
              <img src={pp} alt= "pp"/>
              <p>Nuevos pedidos</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/cocinero/pedidos-preparados'>
            <div className='SideBar-bottons'>
              <img src={PP} alt= "PP"/>
              <p>Pedidos preparados</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/cocinero/historial-pedidos'>
            <div className='SideBar-bottons'>
              <img src={HP} alt= "HP"/>
              <p>Historial de pedidos</p>
            </div>
          </Link>
        </li>               
      </ul>
      <div className='containerBotones'>
          <div className='bottons'>
              <button><Link to='/cocinero/registro'><img src={BH} alt= "BH"/></Link></button>
          </div>
          <div className='bottons1'>
              <button><Link to='/'><img src={BS} alt= "BS"/></Link></button>          
          </div>
      </div>
    </div>
  )
}

function vistaCocinero(props) {
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

export default  vistaCocinero;