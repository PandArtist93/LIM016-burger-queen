import React, { useContext } from 'react';
import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai';
import { images } from '../../constans/index';
import { UserContext } from '../../context/UserContext';
import './productoPorComprar.scss';

function ProductoPorComprar() {
  const {
    pedido, eliminar, less, plus,
  } = useContext(UserContext);
  return (
    <section>
      {pedido.map((item, id) => (
        <div className="dataTablaResumenPedido" key={id}>
          <div className="dataProductoRP">
            <p>
              {' '}
              {item.name.toUpperCase()}
              {' '}
            </p>
          </div>
          <div className="dataUndsRP">
            <button className="btnLessRP" onClick={() => { less(item.id); }} type="button">
              {' '}
              <AiOutlineLine fontSize="1.2em" color="white" />
              {' '}
            </button>
            <p>
              {' '}
              {item.count}
              {' '}
            </p>
            <button className="btnPlusRP" onClick={() => { plus(item.id); }} type="button">
              {' '}
              <AiOutlinePlus fontSize="1.2em" color="white" />
              {' '}
            </button>
          </div>
          <div className="dataPrecioRP">
            <p>
              {' '}
              {item.precio}
              {' '}
            </p>
          </div>
          <button onClick={() => eliminar(item.id)} type="button" className="dataEliminarRP btnEliminarRP">
            <img src={images.eliminar} alt="eliminar" />
          </button>
        </div>
      ))}
    </section>
  );
}

export default ProductoPorComprar;
