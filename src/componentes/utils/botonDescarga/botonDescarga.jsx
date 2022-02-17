import './botonDescarga.scss';
import Descargar from '../../../img/iconos/descargarPDF.png'
import Swal from 'sweetalert2';

const Descarga = () => {
  const modalDescarga = () => {
    let timerInterval
      Swal.fire({
        html: 'Descargando archivo en <b></b> milliseconds.',
        timer: 2000,
        allowOutsideClick: false,
        stopKeydownPropagation: false,
        timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
        /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  return  (           
  	<div className='botonDescarga'>
  	  <div className='boton'>
  	    <button type="onClick" onClick={() => modalDescarga()} >Descargar PDF<img src={Descargar} alt= "descargar"/></button>                             
  	  </div>
  	</div>
	)
} 

export default Descarga