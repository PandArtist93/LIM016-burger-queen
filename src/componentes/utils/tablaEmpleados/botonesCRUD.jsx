import React from "react";
import './botonesCRUD.scss';
import BtnBorrar from '../../../img/iconos/eliminar.png'
import Editar from '../../../img/iconos/editar.png'

const botones = () => {
  return  ( 
    <div className='botonesCRUD'>
      <button type="onclick" className='botonEditar'><img src={Editar} alt= "Editar"/></button>
      <button type="onclick" className='botonEliminar'><img src={BtnBorrar} alt= "BtnBorrar"/></button>
    </div>        
  )
} 

export default botones