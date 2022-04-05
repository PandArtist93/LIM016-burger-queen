//import React  from 'react';
import React, { useContext }  from 'react';
import './listProducts.scss';
import { images } from '../../constans/index';
import Swal from 'sweetalert2';
import { UserProductContext } from '../../context/useProductContext';

function ListProducts() {
  const { productosData, eliminarProducto, editProduct, setEditedProductData, setRenderEditForm } = useContext(UserProductContext);
  
  // modal de confirmarión para editar un producto existente
  const ModalConfirmacionEditar = (e) => {
    const productTargetEdit = e.target.parentNode.parentNode;
    //console.log(productTargetEdit);

    Swal.fire({
      text: '¿Está seguro que desea editar este producto?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta',
    }).then((result) => {
      if (result.isConfirmed) {
        editProduct(productTargetEdit).then( result => {
          setEditedProductData(result.data());
          setRenderEditForm(true);
        });
      }
    });
  };

  // modal de confirmarión para eliminar un producto existente
  const ModalConfirmacionCancelar = (e) => {  
    const productTargetDelete = e.target.parentNode.parentNode;
    
    Swal.fire({
      text: '¿Está seguro que desea borrar este producto?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Producto Borrado!',
          text: 'El producto fue borrado con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });    
        eliminarProducto(productTargetDelete.id);
        
      }
    });
  };

	return (
		<section className="gridResponsivePPM">      
			{productosData.map((product, index) => (
				<div className="DataPorProductoMenu" key={index} id={product.id}>          
					<div className="imagenProducto">
            <button
              className="btnInfo"
              onClick={() => Swal.fire({
                html:
                  `<article class="modalDescripcion">
                    <section class="imgInfo">
                      <img src=${product.img} alt="producto" />
                    </section>
                    <section class="tittleInfo">
                      <h3>DESTALLES DEL PRODUCTO</h3>
                    </section>
                    <section class="nameInfo">
                      <h5>${product.name.toUpperCase()}</h5>
                    </section>
                    <section class="precioInfo">
                      <h6>S/. ${product.precio}0</h6>
                    </section>
                    <section class="detailsInfo">
                      <p> <strong> Código: </strong> ${product.codigo} </p>
                      <p> <strong> Categoría: </strong> ${product.tipo.toUpperCase()} </p>
                      <p> <strong> Descripción: </strong> ${product.descripcion} </p>
                      <p> <strong> Unds. por Plato: </strong> ${product.undsPorPlato} </p>
                    </section>
                  </article>`,
                width: '60%',
                allowOutsideClick: false,
                stopKeydownPropagation: false,
                showCloseButton: true,
                showConfirmButton: false,
                closeButtonAriaLabel: 'cerrar alerta',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp',
                },
              })}
              type="button"
            >
              <img src={images.informacion} alt="" />
            </button>		  
					  <img src={product.img} alt="producto" />
					</div>
					<div className="nombrePrecio">
						<p>
							{' '}
							{product.name.toUpperCase()}
							{' '}
						</p>
						<p>
							S/.
							{product.precio}
							0
						</p>
					</div>
					<div className="containerButton" id={product.id}>
            <button type="button" className="buttonEdit" onClick={ModalConfirmacionEditar}><img src={images.copy} alt='editar'/></button>
						<button type="button" className=" buttonDelete" onClick={ModalConfirmacionCancelar}><img src={images.eliminar} alt='eliminar'/></button>
          </div>					
				</div>
			))}
		</section>
	);
}

export default ListProducts;
