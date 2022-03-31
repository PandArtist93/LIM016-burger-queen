import React from "react";

function BtnsConfirmarYCancelar() {
  return (
      <section className="btnsContainer gridResponsiveBtns">
        <button type="button" className="confirm__button">
          Confirmar
        </button>
        <button type="button" className="cancel__button">
          Cancelar
        </button>
      </section>
  );
}

export default BtnsConfirmarYCancelar;
