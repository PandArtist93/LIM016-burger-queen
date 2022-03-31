import './fecha.scss';

function Fecha() {
  const mydate = new Date();
  const dateTime = mydate.toLocaleTimeString();
  let year = mydate.getYear();
  if (year < 1000) { year += 1900; }
  const day = mydate.getDay();
  const month = mydate.getMonth();
  let daym = mydate.getDate();
  if (daym < 10) { daym = `0${daym}`; }
  const dayarray = ['Dom,', 'Lun,', 'Mar,', 'Mie,', 'Jue,', 'Vie,', 'Sab,'];
  const montharray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  return (
    <div>
      <p>
        Fecha:
        {dayarray[day]}
        {' '}
        {daym}
        {' '}
        de
        {' '}
        {montharray[month]}
        {' '}
        de
        {' '}
        {year}
        {' '}
      </p>
      <p>
        Hora:
        {dateTime}
      </p>
    </div>
  );
}

export default Fecha;
