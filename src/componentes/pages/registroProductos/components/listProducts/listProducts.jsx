import React, { useContext }  from 'react';
import './listProducts.scss';
import { images } from '../../constans/index';
import Swal from 'sweetalert2';
import { UserProductContext } from '../../context/useProductContext';

function ListProducts() {
  console.log('Entra a la funcion')
  const { productosData } = useContext(UserProductContext);
  console.log('productosData:', productosData)
/* 	const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const allProducts = [];
    const productsRef = query(collection(db, 'productos'), orderBy('tipo'));
    const data = await getDocs(productsRef);
    data.docs.forEach((doc) => {
      const values = doc.data();
      allProducts.push({
        id: doc.id,
        name: values.name.toUpperCase(),
        codigo: values.codigo.toUpperCase(),
        descripcion: values.descripcion,
        tipo: values.tipo,        
        precio: values.precio,
				img: values.img, 
				undsPorPlato: values.undsPorPlato
      });
    });
    return allProducts;
  };

  useEffect(() => {
    getProducts().then((allProducts) => {
      setIsLoading(false);
      setProducts(allProducts);
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <div />
    );
  } */

   // modal de confirmarión para editar un producto existente
   const ModalConfirmacionEditar = () => {
    Swal.fire({
      text: '¿Está seguro que editar este producto?',
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
        //editProduct();

      }
    });
  };

  // modal de confirmarión para eliminar un producto existente
  const ModalConfirmacionCancelar = () => {
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
        //eliminarProducto(props);
      }
    });
  };

/*   const eliminarProducto = async (props) => {
    await deleteDoc(doc(db, 'productos', props.id));
  };

  const editProduct = () => {
    
  } */


	return (
		<section className="gridResponsivePPM">
			{productosData.map((product, index) => (
				<div className="DataPorProductoMenu" key={index}>

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
					<div className="containerButton">
            <button type="button" className="buttonEdit" onClick={ModalConfirmacionEditar}><img src={images.editarProductCard} alt='editar'/></button>
						<button type="button" className=" buttonDelete" onClick={ModalConfirmacionCancelar}><img src={images.eliminar} alt='eliminar'/></button>
          </div>					
				</div>
			))}
		</section>
	);
}

export default ListProducts;
