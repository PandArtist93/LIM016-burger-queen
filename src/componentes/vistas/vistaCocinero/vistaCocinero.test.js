import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import VistaCocinero from './vistaCocinero';
import Navbar from '../../utils/navBar/navBar';
import Inicio from '../../Inicio/inicio';
// import HeaderCocinero from '../../headers/headerCocinero';

describe('prueba en <VistaCocinero/>', () => {
  it('evalua si es una función', () => {
    expect(typeof VistaCocinero).toBe('function');
  });
  it('Deberiamos renderizar componente Inicio de la VistaCocinero', () => {
    const { container } = render(<VistaCocinero content={<Inicio />} />);
    expect(container).toBeInTheDocument();
  });
  it('Deberiamos renderizar el navBar de la vistaCocinero', () => {
    const { componentNav } = render(<Navbar />);
    expect(componentNav).toBeInTheDocument();
  });
  /* it('Deberiamos renderizar el sideBar de la vistaCocinero' , () => {
        const {componentSideBar}=render(<HeaderCocinero/>)
        expect(componentSideBar).toBeInTheDocument();
    }) */
});
