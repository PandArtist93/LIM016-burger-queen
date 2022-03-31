import React, { useState } from 'react';
import './tablaPedidos.scss';


function ProductsTable(props) {
  
  const items = props.products;
  const [sortConfig, setSortConfig] = useState({});
 
  function sortProducts() {
    let sortedProducts = [...items];
    if (sortConfig.sortedField) {
      sortedProducts.sort((a, b) => {
        if (a[sortConfig.sortedField] < b[sortConfig.sortedField]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.sortedField] > b[sortConfig.sortedField]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedProducts;
  }

  const requestSort = (sortedField) => {
    let direction = 'ascending';
    if (sortConfig.sortedField === sortedField && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ sortedField, direction });
  }

  return (
    <table id="historial-Ventas-Karma">
      <thead>
        <tr>
          <th width="5%">
            <button type="button" >N°</button>            
          </th>
          <th>
            <button type="button"  onClick={() => requestSort('timestamp')} >FECHA</button>            
          </th>
          <th>
            <button type="button" onClick={() => requestSort('hora')} >HORA</button>        
          </th>
          <th>
            <button type="button" onClick={() => requestSort('cliente')} >CLIENTE</button>            
          </th>
          <th>
            <button type="button" onClick={() => requestSort('estado')} >PEDIDO</button>            
          </th>
          <th>
            <button type="button"  >MONTO</button>            
          </th>
        </tr>
      </thead>
      <tbody>
        {sortProducts().map((item, index) => (
          
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.timestamp}</td>
            <td>{item.hora}</td>
            <td>{item.cliente}</td>
            {console.log(item.timestamp)}
            <td>{item.estado}</td>
            <td>              
              {'S/. '}
              {item.total}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
