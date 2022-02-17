import React, { useState, useMemo} from "react";
import Botones from './botonesCRUD';
import './tablaEmpleados.scss';

const useSortableData = ((items, config = null) => {
   const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
          sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = key => {
      let direction = "descending";       
      if ( sortConfig !== null && sortConfig.key === key && sortConfig.direction === "descending" ) {
          direction = "ascending";
      }        
      setSortConfig({ key, direction });       
    };
  return { items, requestSort };
});

const EmployeesTable = props => {    
   
  const { items, requestSort, sortConfig } = useSortableData(props.employees);
  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  
  return (
    <table>
      <thead>
        <tr>
          <th width= '5%' >
            <button type="button" onClick={() => requestSort("id")} className={getClassNamesFor("id")}>N°</button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("name")} className={getClassNamesFor("codigo")}>CÓDIGO</button>
              
          </th>
          <th>
            <button type="button" onClick={() => requestSort("dni")} className={getClassNamesFor("dni")}>DNI</button>
              
          </th>
          <th>
            <button type="button" onClick={() => requestSort("cargo")} className={getClassNamesFor("cargo")}>CARGO</button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("name")} className={getClassNamesFor("name")}>EMPLEADO</button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("usuario")} className={getClassNamesFor("usuario")}>USUARIO</button>
          </th>
          {/* <th>
            <button type="button" onClick={() => requestSort("correo")} className={getClassNamesFor("correo")}>Correo</button>
          </th> */}
          <th>
            <button type="button" onClick={() => requestSort("celular")} className={getClassNamesFor("celular")}>CELULAR</button>
          </th>
        </tr>               
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.codigo}</td>
            <td>{item.dni}</td>
            <td>{item.cargo}</td>
            <td>{item.name}</td>
            <td>{item.usuario}</td>
            {/* <td>{item.correo}</td> */}
            <td>{item.celular}</td>
            <td>{<Botones/>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeesTable
