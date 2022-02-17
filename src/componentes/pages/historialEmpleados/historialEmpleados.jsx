import Encabezado from '../../utils/encabezado/encabezado';
import DescargarPdf from '../../utils/botonDescarga/botonDescarga'
import EmployeesTable from '../../utils/tablaEmpleados/tablaEmpleados';
import { db } from '../../../firebase/firebase-config';
import './historialEmpleados.scss';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';


const HistorialEmpleados = () => {

  const [employees, setEmployees] = useState([]);
   
  const getEmployees = async () =>  {
    const allEmployees = [];
    const employeesRef = collection(db, 'usuarios');
    const data = await getDocs(employeesRef);
    data.docs.forEach(doc => {
      const values = doc.data();
      allEmployees.push({
        id: doc.id,
        name: `${values.nombres.toUpperCase()}, ${values.apellidos.toUpperCase()}`, 
        codigo: values.codigo.toUpperCase() ,
        dni: values.dni,
        cargo: values.cargo.toUpperCase(),
        usuario: values.usuario.toUpperCase(),
        /* correo: values.correo, */
        celular: values.celular
      })
    });
    setEmployees(allEmployees);
  }

  useEffect(() => {
    getEmployees();
  },  []);

  return  ( 
    <div className='Historial'>
      <h2>HISTORIAL EMPLEADOS</h2>
      <Encabezado/>
      <EmployeesTable employees={ employees } />
      <DescargarPdf/>      
    </div>
  )
} 

export default HistorialEmpleados