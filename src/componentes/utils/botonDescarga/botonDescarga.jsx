import Swal from 'sweetalert2';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import Descargar from '../../../img/iconos/descargarPDF.png';

function Descarga() {
  const modalDescarga = () => {
    let timerInterval;
    Swal.fire({
      html: 'Descargando archivo en <b></b> milliseconds.',
      timer: 2000,
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  };

  return (
    <div className="boton">
      <div className="botonDescarga">
        <div type="onClick" onClick={() => modalDescarga()}>
          <ReactHtmlTableToExcel
            id="test-table-xls-button"
            className="descarga"
            table="historial-Ventas-Karma"
            filename="historial-Ventas-Karma"
            sheet="tablexls"
            buttonText="Descargar Excel"
            type="onClick"
          />
        </div>
        <img src={Descargar} alt="descargar" />
      </div>
    </div>
  );
}

export default Descarga;
