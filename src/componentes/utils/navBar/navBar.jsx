import Logo from '../../../img/logos/Logo-nav.png';
import './navBar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-registro">
        <img src={Logo} alt= "logo"/>
      </div>
    </div>
  )
}

export default Navbar