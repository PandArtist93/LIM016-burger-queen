import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Encabezado from './encabezado';
// import Fecha from '../../utils/fecha/fecha'

describe('prueba en <Encabezado/>', () => {
  it('evalua si es una función', () => {
    expect(typeof Encabezado).toBe('function');
  });
  it('Deberiamos renderizar componente Encabezado', () => {
    const { container } = render(<Encabezado />);
    expect(container).toBeInTheDocument();
  });
  it('Deberian aparecer los textos de Encabezado nombre de la empresa', () => {
    render(<Encabezado />);
    const textContent = screen.getByText(/Empresa: Karma Burger/i);
    expect(textContent).toBeInTheDocument();
  });
  it('Deberian aparecer los textos del Encabezado y ruc de la empresa', () => {
    render(<Encabezado />);
    const textContent = screen.getByText(/RUC: 02121 2486 3342/i);
    expect(textContent).toBeInTheDocument();
  });
  /* it('Deberian aparecer la fecha',() => {
        render(<Encabezado/>)
        const {fecha} = render(<Fecha/>)
        expect(fecha).toBeInTheDocument();
    })  */
});
