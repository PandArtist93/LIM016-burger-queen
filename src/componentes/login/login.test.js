import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Login from './login';
// import Logo from '../../img/logos/Logo-Circular.png';
// import FormAdmin from './loginFormAdm';

describe('prueba en <Login/>', () => {
  const Form = (
    <form className="login-form">
      <p className="login-text">
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x" />
          <i className="fa fa-lock fa-stack-1x" />
        </span>
      </p>
      <input
        type="email"
        className="login-username"
        autoFocus
        required
        placeholder="Usuario"
      />
      <input
        type="password"
        className="login-password"
        autoFocus
        required
        placeholder="Contraseña"
      />
      <a href="google.com" className="login-forgot-pass"> ¿Olvidaste tu contraseña? </a>
    </form>
  );

  it('evalua si es una función', () => {
    expect(typeof Login).toBe('function');
  });
  it('Deberiamos renderizar el componente Login', () => {
    const { container } = render(<Login form={<Form />} />);
    expect(container).toBeInTheDocument();
  });
  it('Deberian aparecer un elemento con la etiqueta img', () => {
    const imgLogo = screen.queryByRole('img', { alt: /logo/i });
    expect(imgLogo).toBeInTheDocument();
  });
});
