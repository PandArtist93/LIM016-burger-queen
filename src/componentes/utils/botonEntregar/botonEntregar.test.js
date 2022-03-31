import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { BotonEntregar } from './botonEntregar';

describe('se debe renderizar el boton entregar', () => {
  beforeAll((done) => {
    document.body.innerHTML = '';
    done();
  });
  afterEach(cleanup);

  it('se espera que el boton Entregado este en la vista', () => {
    render(<BotonEntregar />);
    expect(screen.getByText('Entregado')).toBeInTheDocument();
    fireEvent.click();
  });
});
