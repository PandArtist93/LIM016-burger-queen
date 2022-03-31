import './vistaMesero.scss';
import Navbar from '../../utils/navBar/navBar';
import HeaderMesero from '../../headers/headerMesero';

function VistaMesero(props) {
  return (
    <section className="container">
      <div className="flex">
        <HeaderMesero />
        <div className="content">
          <Navbar />
          {props.content}
        </div>
      </div>
    </section>
  );
}

export default VistaMesero;
