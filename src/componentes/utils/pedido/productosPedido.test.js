import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ProductosPedido from './productosPedido';

describe('prueba en <ProductosPedido/>', () => {
  const orden = [{
    codigoProducto: 'H002',
    count: 1,
    id: 'producto02',
    name: 'extra karma',
    precio: 14.9,
  },
  {
    codigoProducto: 'BF001',
    count: 1,
    id: 'producto14',
    name: 'mango frozen',
    precio: 9.9,
  }];

  it('evalua si es una función', () => {
    expect(typeof ProductosPedido).toBe('function');
  });
  it('Dberiamos renderizar el componente ProductosPedido', () => {
    const { container } = render(<ProductosPedido orden={orden} />);
    expect(container).toBeInTheDocument();
  });
  it('Deberian aparecer un elemento button con nombre Pedido', () => {
    render(<ProductosPedido orden={orden} />);
    const imgLogo = screen.queryByRole('button', { name: /Pedido/i });
    expect(imgLogo).toBeInTheDocument();
  });
  it('Deberian aparecer un elemento button con nombre Cantidad', () => {
    render(<ProductosPedido orden={orden} />);
    const imgLogo = screen.queryByRole('button', { name: /Cantidad/i });
    expect(imgLogo).toBeInTheDocument();
  });
  it('Deberian aparecer un elemento button con nombre Precio', () => {
    render(<ProductosPedido orden={orden} />);
    const imgLogo = screen.queryByRole('button', { name: /Precio/i });
    expect(imgLogo).toBeInTheDocument();
  });
});
