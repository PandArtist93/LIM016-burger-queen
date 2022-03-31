import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Navbar from './navBar';

describe('prueba en <Navbar/>', () => {
  it('evalua si es una función', () => {
    expect(typeof Navbar).toBe('function');
  });
  it('Dberiamos renderizar el componente Navbar', () => {
    const { container } = render(<Navbar />);
    expect(container).toBeInTheDocument();
  });
  it('Deberian aparecer un elemento con la etiqueta img', () => {
    render(<Navbar />);
    const imgLogo = screen.queryByRole('img', { alt: /logo/i });
    expect(imgLogo).toBeInTheDocument();
  });
});
