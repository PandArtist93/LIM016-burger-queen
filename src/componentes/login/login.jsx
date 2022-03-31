import { Link } from 'react-router-dom';
import Logo from '../../img/logos/Logo-Circular.png';
import Firma from '../../img/logos/Logo-MR-Blanco.png';
import Flecha from '../../img/iconos/flechaAtras.png';
import './login.scss';

function Login(props) {
  return (
    <div className="body-login">
      <div className="renderLogin">
        <button type="onclick"><Link to="/"><img src={Flecha} alt="Flecha" /></Link></button>
        <div className="logo-principal">
          <img src={Logo} alt="logo" />
        </div>
        {props.form}
        <div className="underlay-photo" />
        <div className="underlay-black" />
        <div className="firma">
          <img src={Firma} alt="logo" />
        </div>
      </div>
    </div>

  );
}

export default Login;
