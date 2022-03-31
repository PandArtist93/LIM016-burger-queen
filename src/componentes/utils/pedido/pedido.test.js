import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Pedido from './pedido';

describe('prueba en <Pedido/>', () => {
  const orden = [{
    cliente: 'Olivia Rodrigo',
    estado: 'preparado',
    id: 'aaupdkoSvx5EIOCX7G1e',
    mesa: '5',
    orden: [{
      id: 'producto02',
      count: 1,
      name: 'extra karma',
      codigoProducto: 'H002',
      precio: 14.9,
    },
    {
      count: 2,
      precio: 18.9,
      codigoProducto: 'H007',
      id: 'producto07',
      name: 'la inocente',
    },
    {
      precio: 6.9,
      id: 'producto11',
      name: 'aros de cebolla',
      codigoProducto: 'C003',
      count: 3,
    }],
    timestamp: '23/2/2022 13:45:13',
    total: '96.10',
  }];

  it('evalua si es una función', () => {
    expect(typeof Pedido).toBe('function');
  });
  it('Deberiamos renderizar el componente ProductosPedido', () => {
    const { container } = render(<Pedido orden={orden} />);
    expect(container).toBeInTheDocument();
  });
  it('Deberian aparecer el nombre del cliente en el pedido', () => {
    render(<Pedido orden={orden} />);
    const textContent = screen.getByText(orden.cliente);
    expect(textContent).toBeInTheDocument();
  });
});
