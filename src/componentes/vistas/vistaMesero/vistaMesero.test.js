import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import VistaMesero from './vistaMesero';
import Navbar from '../../utils/navBar/navBar';
import Inicio from '../../Inicio/inicio';
// import HeaderMesero from '../../headers/headerMesero';

describe('prueba en <VistaMesero/>', () => {
  it('evalua si es una función', () => {
    expect(typeof VistaMesero).toBe('function');
  });
  /* it('Deberiamos renderizar componente Inicio de la VistaMesero' , () => {
        const {container}=render(<VistaMesero content={<Inicio/>}/>)
        expect(container).toBeInTheDocument();
    }) */
  /*  it('Deberiamos renderizar el navBar de la VistaMesero' , () => {
        const {componentNav}=render(<Navbar/>)
        expect(componentNav).toBeInTheDocument();
    }) */
  /* it('Deberiamos renderizar el sideBar de la VistaMesero' , () => {
        const {componentSideBar}=render(<HeaderMesero/>)
        expect(componentSideBar).toBeInTheDocument();
    }) */
});
