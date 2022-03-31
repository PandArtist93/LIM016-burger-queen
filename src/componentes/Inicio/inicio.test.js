import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Inicio from './inicio';

describe('prueba en <Inicio/>', () => {
  it('evalua si es una función', () => {
    expect(typeof Inicio).toBe('function');
  });
  it('Dberiamos renderizar vista Inicio', () => {
    const { container } = render(<Inicio />);
    expect(container).toBeInTheDocument();
  });
  it('Deberian aparecer los textos de bienvenida', () => {
    render(<Inicio />);
    const textContent = screen.getByText(/En Karma Te Damos Una Cálida Bienvenida/i);
    expect(textContent).toBeInTheDocument();
  });
  it('Deberian aparecer el autor de la cita', () => {
    render(<Inicio />);
    const textContent = screen.getByText(/Lin Yutang/i);
    expect(textContent).toBeInTheDocument();
  });
  /*  it('Deberian aparecer la imagen con el logo MR',() => {
        render(<Inicio/>);
        const imgLogoMR =  screen.queryByRole('img', {alt: /MR/i});
        expect(imgLogoMR).toBeInTheDocument();
    })  */
  /*  it('Deberian aparecer un elemento img con el gif',() => {
        render(<Inicio/>);
        const imgLogoGif =  screen.queryByRole('img', {alt: /gif/i});
        expect(imgLogoGif).toBeInTheDocument();
    })  */
});
