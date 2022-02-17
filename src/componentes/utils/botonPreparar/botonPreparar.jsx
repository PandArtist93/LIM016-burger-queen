import './botonPreparar.scss';

const BotonPreparar = () => {
  return  ( 
    <div className='botonPreparar'>
      <div className='botonSecPreparar'>
        <button className='btnPreparando' type="onClick">Preparando</button>   
        <button className='btnPreparado' type="onClick">Preparado</button> 
        <button className='btnCancelar' type="onClick">Cancelar</button>                      
      </div>
    </div>        
  )
} 

export default BotonPreparar