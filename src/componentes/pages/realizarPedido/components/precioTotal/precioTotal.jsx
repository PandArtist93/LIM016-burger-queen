import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './precioTotal.scss';

function PrecioTotal() {
  const { total } = useContext(UserContext);

  return (
    <div className="TotalRP">
      <p>Total:</p>
      <p>
        S/
        {total}
      </p>
    </div>
  );
}

export default PrecioTotal;
