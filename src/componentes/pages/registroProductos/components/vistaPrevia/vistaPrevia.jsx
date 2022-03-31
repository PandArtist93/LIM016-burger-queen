import React from "react";
import "./vistaPrevia.scss";
import { images } from "../../constans/index";

function VistaPrevia() {
  return (
    <section className="containerPreviewB">
      <section className="tittleInfoB">
        <h3>VISTA PREVIA</h3>
      </section>
      <article className="modalDescripcionB">
        <div>
          <div className="nameInfoB">
            <h5>KARMA CLÁSICA</h5>
          </div>
          <div className="detailsInfoB">
            <p>
              <strong> Código: </strong> H001
            </p>
            <p>
              <strong> Categoría: </strong> Hamburguesa
            </p>
            <p>
              <strong> Descripción: </strong>Hamburguesas de Carne + Papas +
              Ensalada + Salsas Clásicas
            </p>
            <p>
              <strong> Unds. por Plato: </strong> 4
            </p>
            <br />
            <section className="precioInfoB">
              <h6>S/. 12.90</h6>
            </section>
          </div>
        </div>
        <div className="productB">
          <img src={images.camara} alt="imagen" />
          <button>
            <img
              src={images.editarImagen}
              alt="imgIcon"
              className="editProduct"
            />
          </button>
        </div>
      </article>
    </section>
  );
}

export default VistaPrevia;
