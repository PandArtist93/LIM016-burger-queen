import gif from '../../img/extra/Burgers-Gif.gif';
import MR from '../../img/logos/Logo-MR-Amarillo.png';
import './inicio.scss';
import CartaCompleta from '../bienvenida/container/Menu/Menu-Karma.pdf';

function landing() {
  return (
    <section className="inicio">
      <div className="gif">
        <img src={gif} alt="gif" />
        <div className="btnCarta">
          <button type="button" className="custom__button">
            <a
              type="button"
              href={CartaCompleta}
              download="La-Carta-Karma"
              target="_blank"
              rel="noreferrer"
            >
              Descarga La Carta
            </a>
          </button>
        </div>
      </div>
      <div className="boxFrase">
        <article>
          <h1>En Karma Te Damos Una Cálida Bienvenida.</h1>
          <h4>
            Recuerda siempre, si un huevo se rompe por una fuerza externa, la
            vida termina. Si se rompe por una fuerza interna, la vida comienza.
            Las cosas buenas siempre comienzan desde el interior.
          </h4>
          <div>
            <h4>
              "La esperanza es como una carretera en el país, nunca hubo un
              camino, pero cuando mucha gente camina sobre ella, el camino
              comienza a existir"
            </h4>
            <h6>Lin Yutang</h6>
          </div>
        </article>
        <div className="boxLogoMR">
          <img src={MR} alt="MR" />
        </div>
      </div>
    </section>
  );
}

export default landing;
