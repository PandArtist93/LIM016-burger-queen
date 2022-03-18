import React, { useContext } from 'react';
import { images } from '../../constans/index';
import { UserContext } from '../../context/UserContext';
import './navRealizarPedido.scss';

function  NavRealizarPedido() {
  const { cliente, setCliente } = useContext(UserContext)
  
  let date = new Date();
  //console.log(date);
  const numerosMesa = [ {mesa: "mesa"}, {mesa: "1"}, {mesa: "2"}, {mesa: "3"}, {mesa: "4"}, {mesa: "5"}, {mesa: "6"}, {mesa: "7"}, {mesa: "8"} ]

  return ( 
    <div className="navRP">
      <div className="fechaYhora">
        <label>
          <img src={images.reloj} alt="reloj" /> <p> Hora: {date.toLocaleTimeString()} </p>
        </label>
        <label>
          <img src={images.calendario} alt="calendario" /><p>Fecha: {date.toLocaleDateString()}</p>
        </label>
      </div>
  
      <div className="inputMesa">
        <label >          
          <p>Mesa:</p>
          <select 
          id="nMesa" 
          name="nMesa" 
          value={cliente.mesa}
          onChange={(e) => setCliente({...cliente, mesa: e.target.value})}>
            {numerosMesa.map((item, i) => (
              <option key={"numerosMesa" + i} value={i}> {item.mesa} </option>
              ))}
          </select>
        </label>
      </div>
      
      <div className="inputCliente">
        <label >
          <p>Cliente:</p>
          <input 
          id="nombreCliente" 
          name="nombreCliente" 
          type="text"
          required={true} 
          maxLength="25"
          value={cliente.cliente}
          onChange={(e) => setCliente({...cliente, cliente: e.target.value.replace(/^\d$/g,'')})}
          />
        </label>
      </div>
    </div>
  );
}

export default NavRealizarPedido;