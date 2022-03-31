import React from 'react';
import './botonesCRUD.scss';
import Swal from 'sweetalert2';
import { doc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import BtnBorrar from '../../../img/iconos/eliminar.png';
import Editar from '../../../img/iconos/editar.png';
import { db } from '../../../firebase/firebase-config';

function Botones(props) {
  const navigate = useNavigate();

  // me redirige al formulario para actualizar los datos del usuario
  const handleClick = (props) => {
    navigate(`/admin/historial-empleados/actualizar-datos/${props.id}`);
  };

  // modal de confirmarión para editar un empleado registrado
  const ModalConfirmacionEditar = () => {
    Swal.fire({
      text: '¿Está seguro que editar este usuario?',
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
        handleClick(props);
      }
    });
  };

  // modal de confirmarión para eliminar un empleado registrado
  const ModalConfirmacionCancelar = () => {
    Swal.fire({
      text: '¿Está seguro que desea cancelar el proceso?',
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
          title: '¡Usuario Borrado!',
          text: 'El usuario fue borrado con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        eliminarEmploye(props);
      }
    });
  };

  // método que elimina de la colección usuarios
  const eliminarEmploye = async (props) => {
    await deleteDoc(doc(db, 'usuarios', props.id));
    props.loading(true); // setIsLoading state on the grandfather
  };

  return (
    <div className="botonesCRUD" id={props}>
      <button type="onclick" className="botonEditar" onClick={ModalConfirmacionEditar}><img src={Editar} alt="Editar" /></button>
      <button type="onclick" className="botonEliminar" onClick={ModalConfirmacionCancelar}><img src={BtnBorrar} alt="BtnBorrar" /></button>
    </div>
  );
}

export default Botones;
