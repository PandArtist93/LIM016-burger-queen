import React from 'react'

function FormProducto() {
    const categorias = [{ categoria: 'Bebidas Frías' }, { categoria: 'Bebidas Calientes' }, { categoria: 'Complementos' }, { categoria: 'Hamburguesas' }];
  return (
    <div className="title">
    <h1>REGISTRO DE PRODUCTOS</h1>
    <form>
      <label>
        <p>Nombre</p>
        <input
          id="nombreProducto"
          name="nombreProducto"
          type="text"
          required
          maxLength="25"
        />
      </label>
      <div className="contenedorProductosInterno">
        <label>
          <p>Precio</p>
          <input
            id="nombreProducto"
            name="nombreProducto"
            type="text"
            required
            maxLength="25"
          />
        </label>
        <label>
          <p>Categoría</p>
          <select
            id="categoria"
            name="categoria"
          >
            {categorias.map((item, i) => (
              <option key={`categoria${i}`} value={i}>
                {' '}
                {item.categoria}
                {' '}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Unidades por Plato</p>
          <input
            id="nombreProducto"
            name="nombreProducto"
            type="text"
            required
            maxLength="25"
          />
        </label>
        <label>
          <p>Código</p>
          <input
            id="nombreProducto"
            name="nombreProducto"
            type="text"
            required
            maxLength="25"
          />
        </label>
      </div>
      <label>
        <p>Descripción </p>
        <input
          id="nombreProducto"
          name="nombreProducto"
          type="text"
          required
          maxLength="25"
        />
      </label>
    </form>
  </div>
  )
}

export default FormProducto