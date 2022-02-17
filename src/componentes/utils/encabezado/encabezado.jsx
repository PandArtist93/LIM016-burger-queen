import Logo from '../../../img/logos/Logo-Encabezado.png';
import './encabezado.scss';
import Fecha from '../../utils/fecha/fecha'

const Encabezado = () => {
  return  ( 
    <div className='datosEmpresa'>
      <div className='descripcion'>
        <img src={Logo} alt= "logo"/>
        <div className='datos'>
          <p>EMPRESA: Karma Burger</p>
          <p>RUC: 0212124863342</p>
        </div>
      <div className='fecha'><Fecha/></div>
      </div>
    </div>
  )
} 

export default Encabezado