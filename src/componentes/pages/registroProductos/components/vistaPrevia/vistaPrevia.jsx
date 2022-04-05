import React from "react";
import "./vistaPrevia.scss";

function VistaPrevia({ values }) {
  return (
    <section className="containerPreviewB">
      <section className="tittleInfoB">
        <h3>VISTA PREVIA</h3>
      </section>

      <article className="modalDescripcionB">
        <div>
          <div className="nameInfoB">
            <h5>{values.name ?? ""}</h5>
          </div>
          <div className="detailsInfoB">
            <p>
              <strong> Código: </strong> {values.codigo ?? ""}
            </p>
            <p>
              <strong> Categoría: </strong> {values.tipo ?? ""}
            </p>
            <p>
              <strong> Descripción: </strong>
              {values.descripcion ?? ""}
            </p>
            <p>
              <strong> Unds. por Plato: </strong>
              {values.undsPorPlato ?? ""}
            </p>
            <br />
            <section className="precioInfoB">
              <h6>S/. {values.precio ?? ""}</h6>
            </section>
          </div>
        </div>
        <div className="productB">
          <img
            src={
              values.img !== ""
                ? values.img
                : "https://raw.githubusercontent.com/RJRCH123/LIM016-burger-queen/main/src/componentes/pages/registroProductos/assets/addProduct.png"
            }
            alt="imagen"
            style={{ width: "100%" }}
          />
        </div>
      </article>
    </section>
  );
}

export default VistaPrevia;
