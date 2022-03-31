import './login.scss';

function FormEmploye() {
  return (
    <form className="login-form">
      <p className="login-text">
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x" />
          <i className="fa fa-lock fa-stack-1x" />
        </span>
      </p>
      <input type="email" className="login-username" autoFocus="true" required="true" placeholder="Usuario" />
      <input type="password" className="login-password" required="true" placeholder="Contraseña" />
      n/
      <input type="submit" name="Iniciar Sesión" value="Iniciar Sesión" className="login-submit" />
    </form>
  );
}
export default FormEmploye;
