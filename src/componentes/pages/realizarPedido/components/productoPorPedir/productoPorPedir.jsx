import React, { useContext } from 'react';
import { AiOutlinePlus, AiOutlineLine} from 'react-icons/ai'
import './productoPorPedir.scss';
import { images } from '../../constans/index';
import Swal from 'sweetalert2';
import { UserContext } from '../../context/UserContext';

const ProductoPorPedir = () => { 

  const { plus, less, productData, agregarPedido } = useContext(UserContext)

  return <section className='gridResponsivePPM'> 
    {productData.map((item, index) => {
      return (
        <div className="DataPorProductoMenu" key={index}>
          <div className="imagenProducto">
            <button className="btnInfo" onClick={() => Swal.fire({
                  html: 
                  `<article class="modalDescripcion">
                    <section class="imgInfo">
                      <img src=${item.img} alt="producto" />
                    </section>
                    <section class="tittleInfo">
                      <h3>DESTALLES DEL PRODUCTO</h3>
                    </section>
                    <section class="nameInfo">
                      <h5>${item.name.toUpperCase()}</h5>
                    </section>
                    <section class="precioInfo">
                      <h6>S/. ${item.precio}0</h6>
                    </section>
                    <section class="detailsInfo">
                      <p> <strong> Código: </strong> ${item.codigo} </p>
                      <p> <strong> Categoría: </strong> ${item.tipo.toUpperCase()} </p>
                      <p> <strong> Descripción: </strong> ${item.descripcion} </p>
                      <p> <strong> Unds. por Plato: </strong> ${item.undsPorPlato} </p>
                    </section>
                  </article>`,
                  width: '60%',
                  allowOutsideClick: false,
                  stopKeydownPropagation: false,
                  showCloseButton: true,
                  showConfirmButton: false,
                  closeButtonAriaLabel: 'cerrar alerta',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })} type="button" ><img src={images.informacion} alt="" /> 
            </button>
            <img src={item.img} alt="producto" />
          </div>
          <div className="nombrePrecio">
            <p> {item.name.toUpperCase()} </p>
            <p>S/. {item.precio}0</p>
          </div>
          <div className="agregarYaumentar">
            <button onClick={() => agregarPedido(item)} type="button" className="Agregar__button">Agregar</button>
          </div>
        </div>
      )})}
  </section>
};

export default ProductoPorPedir;
