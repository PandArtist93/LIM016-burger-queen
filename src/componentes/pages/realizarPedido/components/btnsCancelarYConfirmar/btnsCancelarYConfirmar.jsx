import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from '../../context/UserContext';
import './btnsCancelarYConfirmar.scss';

function BtnsCancelarYConfirmar() {
  const { confirmarOrdenesF, limpiarOrden } = useContext(UserContext);

  const modalConfirmarOrden = () => {
    Swal.fire({
      text: '¿Está seguro que desea enviar el pedido a cocina?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta',
    }).then((result) => {
      if (result.isConfirmed) {
        if (confirmarOrdenesF() !== false) {
          Swal.fire({
            title: '¡Pedido Confirmado!',
            text: 'El pedido fue enviado a cocina con éxito',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });
          limpiarOrden();
        } else if (confirmarOrdenesF() === false) {
          Swal.fire({
            title: '¡Pedido Sin Confirmar!',
            text: 'No se pudo completar el pedido por falta de datos',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const modalCancelarOrden = () => {
    Swal.fire({
      text: '¿Está seguro que desea cancelar el pedido?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Pedido Cancelado!',
          text: 'El pedido fue cancelado con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        limpiarOrden();
      }
    });
  };

  return (
    <div>
      <section className="btnsContainer gridResponsiveBtns">
        <button type="button" onClick={() => modalConfirmarOrden()} className="confirm__button">Confirmar</button>
        <button type="button" onClick={() => modalCancelarOrden()} className="cancel__button">Cancelar</button>
      </section>
    </div>
  );
}

export default BtnsCancelarYConfirmar;
