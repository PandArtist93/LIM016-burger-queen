import Logo from '../../../img/logos/Logo-nav.png';
import './navBar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-registro">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default Navbar;
