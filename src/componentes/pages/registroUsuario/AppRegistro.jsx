import React, { useState } from 'react';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';
import {
  Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError,
} from './elementos';
import Input from './input';

function AppRegistro() {
  // se estan estableciendo los valores iniciales para cada uno de nuestros inputs
  	const [usuario, cambiarUsuario] = useState({ campo: '', valido: null });
  const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
  	const [apellido, cambiarApellido] = useState({ campo: '', valido: null });
  const [codigo, cambiarCodigo] = useState({ campo: '', valido: null });
  const [contraseña, cambiarContraseña] = useState({ campo: '', valido: null });
  const [contraseña2, cambiarContraseña2] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [celular, cambiarCelular] = useState({ campo: '', valido: null });
  const [dni, cambiarDni] = useState({ campo: '', valido: null });
  	const [cargo, cambiarCargo] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  // se utilizan expresiones regulares para limitar al usuario a ingresar
  // valores en los input que no correspondan con lo solicitado

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    contraseña: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{7,9}$/, // 7 a 9 numeros,
    codigo: /^[a-zA-Z0-9]{4,6}$/, // Letras, numeros.
    dni: /^\d{6,8}$/, // 6 a 8 numeros,
    cargo: /^[a-zA-ÿ\s]{1,40}$/, // Letras y espacios.
  };

  // se esta validando que la contraseña se ingreso de manera correcta

  const validarPassword2 = () => {
    if (contraseña.campo.length > 0) {
      if (contraseña.campo !== contraseña2.campo) {
        cambiarContraseña2((prevState) => ({ ...prevState, valido: 'false' }));
      } else {
        cambiarContraseña2((prevState) => ({ ...prevState, valido: 'true' }));
      }
    }
  };

  // se establece la comunicación con db de firebase para crear la colección con los datos del usuario

  const userCollectionRef = collection(db, 'usuarios');

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      usuario: usuario.campo,
      nombres: nombre.campo,
      apellidos: apellido.campo,
      cargo: cargo.campo,
      correo: correo.campo,
      dni: dni.campo,
      celular: celular.campo,
      contraseña: contraseña.campo,
      codigo: codigo.campo,
    });
  };

  // se define la estructura del formulario

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      usuario.valido === 'true'
			&& nombre.valido === 'true'
			&& apellido.valido === 'true'
			&& codigo.valido === 'true'
			&& contraseña.valido === 'true'
			&& contraseña2.valido === 'true'
			&& correo.valido === 'true'
			&& celular.valido === 'true'
			&& dni.valido === 'true'
			&& cargo.valido === 'true'
    ) {
      createUser();
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: '', valido: null });
      cambiarNombre({ campo: '', valido: null });
      cambiarApellido({ campo: '', valido: null });
      cambiarCodigo({ campo: '', valido: null });
      cambiarContraseña({ campo: '', valido: null });
      cambiarContraseña2({ campo: '', valido: null });
      cambiarCorreo({ campo: '', valido: null });
      cambiarCelular({ campo: '', valido: null });
      cambiarDni({ campo: '', valido: null });
      cambiarCargo({ campo: '', valido: null });
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <main>
      <h2>FORMULARIO DE REGISTRO</h2>
      <Formulario action="" onSubmit={onSubmit}>

        <Input
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          required="true"
          tipo="text"
          label="Usuario"
          placeholder="Usuario"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
          expresionRegular={expresiones.usuario}
        />
        <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          required="true"
          tipo="text"
          label="Nombre"
          placeholder="Nombre"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={apellido}
          cambiarEstado={cambiarApellido}
          required="true"
          tipo="text"
          label="Apellido"
          placeholder="Apellido"
          name="apellido"
          leyendaError="El Apellido solo puede contener letras y espacios."
          expresionRegular={expresiones.apellido}
        />
        <Input
          estado={codigo}
          cambiarEstado={cambiarCodigo}
          required="true"
          tipo="text"
          label="Codigo"
          placeholder="Codigo"
          name="codigo"
          leyendaError="El codigo debe tener la primera letra de su cargo y el número de usuario Ej: M001"
          expresionRegular={expresiones.codigo}
        />
        <Input
          estado={contraseña}
          cambiarEstado={cambiarContraseña}
          required="true"
          tipo="password"
          label="Contraseña"
          placeholder="•••••••••"
          name="contraseña1"
          leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
          expresionRegular={expresiones.contraseña}
        />
        <Input
          estado={contraseña2}
          cambiarEstado={cambiarContraseña2}
          required="true"
          tipo="password"
          label="Repetir Contraseña"
          placeholder="•••••••••"
          name="contraseña2"
          leyendaError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
        />
        <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          required="true"
          tipo="email"
          label="Correo Electrónico"
          placeholder="Correo"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
        />
        <Input
          estado={celular}
          cambiarEstado={cambiarCelular}
          required="true"
          tipo="text"
          label="celular"
          placeholder="Celular"
          name="celular"
          leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
          expresionRegular={expresiones.celular}
        />
        <Input
          estado={dni}
          cambiarEstado={cambiarDni}
          required="true"
          tipo="text"
          label="DNI"
          placeholder="DNI"
          name="DNI"
          leyendaError="El DNI solo puede contener maximo de 6 a 8 dígitos"
          expresionRegular={expresiones.dni}
        />
        <Input
          estado={cargo}
          cambiarEstado={cambiarCargo}
          required="true"
          tipo="text"
          label="Cargo"
          placeholder="Cargo"
          name="cargo"
          leyendaError="El cargo solo puede contener letras."
          expresionRegular={expresiones.cargo}
        />

        <ContenedorBotonCentrado>
          <Boton type="submit" onClick={onSubmit}>Registrar Personal</Boton>

          {formularioValido === true && (
            <MensajeExito>
              <p>
                <b>¡Usuario Actualizado Exitosamente! ✔️</b>
              </p>
            </MensajeExito>
          )}

          {formularioValido === false && (
            <MensajeError>
              <p>
                <b>Error:</b>
                {' '}
                Por favor, rellena el formulario correctamente.
              </p>
            </MensajeError>
          )}
        </ContenedorBotonCentrado>

      </Formulario>
    </main>
  );
}

export default AppRegistro;
