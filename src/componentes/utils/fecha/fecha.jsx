import './fecha.scss';

const Fecha = () => {
  let mydate=new Date()
  let dateTime=mydate.toLocaleTimeString()
  let year=mydate.getYear() 
  if (year < 1000) 
  year+=1900 
  let day=mydate.getDay() 
  let month=mydate.getMonth() 
  let daym=mydate.getDate() 
  if (daym<10) 
  daym="0"+daym 
  let dayarray = new Array("Dom,", "Lun,", "Mar,", "Mie,", "Jue,", "Vie,", "Sab,")
  let montharray = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
  
    return  ( 
        <div>
           <p>Fecha: {dayarray[day]} {daym} de {montharray[month]} de {year} </p>
           <p>Hora: {dateTime} </p>
        </div>
    )
} 

export default Fecha