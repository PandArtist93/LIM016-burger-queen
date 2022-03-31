import Logo from '../../../img/logos/Logo-Encabezado.png';
import './encabezado.scss';
import Fecha from '../fecha/fecha';

function Encabezado() {
  return (
    <div className="datosEmpresa">
      <div className="descripcion">
        <img src={Logo} alt="logo" />
        <div className="datos">
          <p>Empresa: Karma Burger</p>
          <p>RUC: 02121 2486 3342</p>
        </div>
        <div className="fecha"><Fecha /></div>
      </div>
    </div>
  );
}

export default Encabezado;
