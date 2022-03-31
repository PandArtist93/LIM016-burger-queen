import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { BotonPreparado } from './botonPreparado';

describe('se debe renderizar el boton entregar', () => {
  beforeAll((done) => {
    document.body.innerHTML = '';
    done();
  });
  afterEach(cleanup);

  it('se espera que el boton Preparado este en la vista', () => {
    render(<BotonPreparado />);
    expect(screen.getByText('Preparado')).toBeInTheDocument();
    fireEvent.click();
  });
});
