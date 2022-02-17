import React, { useState, useEffect} from "react";
import './tablaPedidos.scss';



const useSortableData = ((items, config = null) => {
   const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useEffect(() => {
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
      sortedItems(key);
      direction = "ascending";
    }        
    setSortConfig({ key, direction });  
  };
  return { items, requestSort };
});

const ProductsTable = props => {
    
  const { items, requestSort, sortConfig } = useSortableData(props.products);
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
            <button type="button" onClick={() => requestSort("codigo")} className={getClassNamesFor("codigo")}>CODIGO</button>
              
          </th>
          <th>
            <button type="button" onClick={() => requestSort("mesero")} className={getClassNamesFor("mesero")}>MESERO</button>
              
          </th>
          <th>
            <button type="button" onClick={() => requestSort("cocinero")} className={getClassNamesFor("cocinero")}>COCINERO</button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("pedido")} className={getClassNamesFor("pedido")}>PEDIDO</button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("monto")} className={getClassNamesFor("monto")}>MONTO</button>
          </th>
        </tr>               
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.codigo}</td>
            <td>{item.mesero}</td>
            <td>{item.cocinero}</td>
            <td>{item.pedido}</td>
            <td>{item.monto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable
