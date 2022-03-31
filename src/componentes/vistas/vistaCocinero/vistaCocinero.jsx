import './vistaCocinero.scss';
import Navbar from '../../utils/navBar/navBar';
import HeaderCocinero from '../../headers/headerCocinero';

function vistaCocinero(props) {
  return (
    <section className="container">
      <div className="flex">
        <HeaderCocinero />
        <div className="content">
          <Navbar />
          {props.content}
        </div>
      </div>
    </section>
  );
}

export default vistaCocinero;
