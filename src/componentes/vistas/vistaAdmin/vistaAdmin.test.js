import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import VistaAdmin from './vistaAdmin';
import Navbar from '../../utils/navBar/navBar';
import Inicio from '../../Inicio/inicio';
// import HeaderAdmin from '../../headers/headerAdmin';

describe('prueba en <VistaAdmin/>', () => {
  it('evalua si es una función', () => {
    expect(typeof VistaAdmin).toBe('function');
  });
  it('Deberiamos renderizar componente Inicio de la VistaAdmin', () => {
    const { container } = render(<VistaAdmin content={<Inicio />} />);
    expect(container).toBeInTheDocument();
  });
  it('Deberiamos renderizar el navBar de la VistaAdmin', () => {
    const { componentNav } = render(<Navbar />);
    expect(componentNav).toBeInTheDocument();
  });
  /* it('Deberiamos renderizar el sideBar de la VistaAdmin' , () => {
        const {componentSideBar}=render(<HeaderAdmin>)
        expect(componentSideBar).toBeInTheDocument();
    }) */
});
