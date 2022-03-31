import React from 'react';
import Swal from 'sweetalert2';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';
import './botonPreparar.scss';

const BotonPreparar = (props) => {
  // método que elimina el pedido de la colección
  const eliminarPedido = async (id) => {
    const pedidoDocRef = doc(db, 'pedidos', id);
    await updateDoc(pedidoDocRef, {
      estado: 'cancelado',
    });
    props.loading(true);
  };

  // método que actualiza el estado del pedido, y lo elimina de la colección

  const actualizarEstado = async (id) => {
    const pedidoDocRef = doc(db, 'pedidos', id);
    await updateDoc(pedidoDocRef, {
      estado: 'preparado',
    });
    props.loading(true);
  };

  // modal de confirmarión para editar un empleado registrado
  const ModalCancelar = (id) => {
    Swal.fire({
      text: '¿Está seguro que desea eliminar el pedido?',
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
        eliminarPedido(id);
      }
    });
  };

  const listOptions = [
    /* { text: "Preparando", className: "btnPreparando" }, */
    { text: 'Preparado', className: 'btnPreparado', operacion: actualizarEstado },
    { text: 'Cancelar', className: 'btnCancelar', operacion: ModalCancelar },
  ];

  return listOptions.map((option, index) => (
    <div className="botonPreparar" key={index}>
      <div className="botonSecPreparar">
        <button
          key={`${index}botonPreparar${props.info.id}`}
          className={option.className}
          type="onClick"
          onClick={() => option.operacion(props.info.id)}
        >
          {option.text}
        </button>
      </div>
    </div>
  ));
};

export default BotonPreparar;
