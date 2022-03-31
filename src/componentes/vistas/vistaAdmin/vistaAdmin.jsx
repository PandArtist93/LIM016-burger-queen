import './vistaAdmin.scss';
import Navbar from '../../utils/navBar/navBar';
import HeaderAdmin from '../../headers/headerAdmin';

function VistaAdmin(props) {
  return (
    <section className="container">
      <div className="flex">
        <HeaderAdmin />
        <div className="content">
          <Navbar />
          {props.content}
        </div>
      </div>
    </section>
  );
}

export default VistaAdmin;
