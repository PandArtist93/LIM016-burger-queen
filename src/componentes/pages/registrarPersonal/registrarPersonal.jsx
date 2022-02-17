import './registrarPersonal.scss';
const RegistroPersonal = () => {

  const onSubmit = (e) => {
	  e.preventDefault();
  }

  return  ( 
    <div>
      <div className="datosRegistro">
        <h2>FORMULARIO DE REGISTRO</h2>
        <form id='formRegistro' action='' onSubmit={onSubmit} >
          <div className='subTitle'>
            <h3>Datos personales del Empleado</h3>
          </div>
          <div className='flexForm'>
            <label>
              <p>Nombres</p>
              <input id="nombre" name="nombre" type="nombre"/>
            </label>
                  
            <label>
              <p>Apellidos</p>
              <input id="apellido" name="apellido" type="apellido"/>
            </label>
          </div>  
          <div className='flexForm'>
            <label>
              <p>DNI</p>
              <input id="DNI" name="DNI" type="DNI"/>
            </label>
                        
            <label>
              <p>Edad</p>
              <input id="edad" name="edad" type="edad"/>
            </label>
          </div>
          <div className='flexForm'>
            <label >
              <p>Celular</p>
              <input id="celular" name="celular" type="celular"/>
            </label>
            
            <label>
              <p>Cargo</p>
              <input id="cargo" name="cargo" type="cargo"/>
            </label>
          </div>
          <div className='subTitle'>
                        <h3>Datos otorgados</h3>
          </div> 
          <div className='flexForm'>
            <label>
              <p>Usuario</p>
              <input id="usuario" name="usuario" type="usuario" />
            </label>
            
            <label>
              <p>Correo</p>
              <input id="correo" name="correo" type="correo" />
            </label>
          </div>
          <div className='flexForm'>
            <label>
              <p>Contraseña</p>
              <input id="contraseña1" name="contraseña1" type="contraseña1"/>
            </label>
            
            <label>
              <p>Contraseña</p>
              <input id="contraseña2" name="contraseña" type="contraseña"/>
            </label>
          </div>                 
          <button type="submit">Registrar Personal</button>
        </form>
      </div>         
    </div>
  )
} 

export default RegistroPersonal