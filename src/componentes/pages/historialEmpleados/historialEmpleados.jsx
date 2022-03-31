import Encabezado from '../../utils/encabezado/encabezado';
import EmployeesTable from '../../utils/tablaEmpleados/tablaEmpleados';
import { db } from '../../../firebase/firebase-config';
import './historialEmpleados.scss';
import {
  collection, getDocs, orderBy, query,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../../utils/loading-spinner/loading-spinner';

function HistorialEmpleados() {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const allEmployees = [];
    const employeesRef = query(collection(db, 'usuarios'), orderBy('cargo'));
    const data = await getDocs(employeesRef);
    data.docs.forEach((doc) => {
      const values = doc.data();
      allEmployees.push({
        id: doc.id,
        name: `${values.nombres.toUpperCase()}, ${values.apellidos.toUpperCase()}`,
        codigo: values.codigo.toUpperCase(),
        dni: values.dni,
        cargo: values.cargo.toUpperCase(),
        usuario: values.usuario.toUpperCase(),
        celular: values.celular,
      });
    });
    return allEmployees;
  };

  useEffect(() => {
    getEmployees().then((allEmployees) => {
      setIsLoading(false);
      setEmployees(allEmployees);
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <section className="paddingFlex">
      <h2>HISTORIAL EMPLEADOS</h2>
      <Encabezado />
      <EmployeesTable employees={employees} estado={setEmployees} loading={setIsLoading} />
    </section>
  );
}

export default HistorialEmpleados;
