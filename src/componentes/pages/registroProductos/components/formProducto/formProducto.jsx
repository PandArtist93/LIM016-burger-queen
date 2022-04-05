import React, { useRef, useState, useEffect, useContext } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../../firebase/firebase-config';
import VistaPrevia from "../vistaPrevia/vistaPrevia";
import BtnsConfirmarYCancelar from "../btnsConfirmarYCancelar/btnsConfirmarYCancelar";
import { UserProductContext } from '../../context/useProductContext';
//import { subirFileStorage } from '../../../../../firebase/firebaseStorage';
//import imgCamara from "../../assets/addProduct.png";

function FormProducto({productData}) {
  const categorias = [{ categoria: '' }, { categoria: 'Bebidas Frias' }, { categoria: 'Bebidas Calientes' }, { categoria: 'Complementos' }, { categoria: 'Hamburguesas' }];

  const { renderEditForm, setRenderEditForm } = useContext(UserProductContext);
  const [renderPreview, setRenderPreview] = useState(false);

  const nombre = useRef('');
  const precio = useRef('');
  const categoria = useRef('');
  const undsPorPlato = useRef('');
  const codigo = useRef('');
  const descripcion = useRef('');
  const img = useRef('');

  const createProduct = async () => {

    const productCollectionRef = collection(db, 'productos');

    await addDoc(productCollectionRef, {
      codigo: codigo.current.value,
      descripcion: descripcion.current.value,
      name: nombre.current.value,
      precio: precio.current.value,
      undsPorPlato: undsPorPlato.current.value,
      tipo: categoria.current.value,
      //img: img.current.value,
      img: img.current.value !== '' ? img.current.value : 'https://raw.githubusercontent.com/RJRCH123/LIM016-burger-queen/main/src/componentes/pages/registroProductos/assets/addProduct.png'
    });
  };

  const setFormValues = () => {
    if (productData) {

      codigo.current.value = productData.codigo
      descripcion.current.value = productData.descripcion
      nombre.current.value = productData.name
      precio.current.value = productData.precio
      undsPorPlato.current.value = productData.undsPorPlato
      categoria.current.value = productData.tipo
      img.current.value = productData.img
      setRenderEditForm(true)
    } 
  }

  const cleanInputs = () => {
    codigo.current.value = ""
    descripcion.current.value = ""
    nombre.current.value = ""
    precio.current.value = ""
    undsPorPlato.current.value = ""
    categoria.current.value = ""
    img.current.value = ""
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await createProduct();
    cleanInputs();
    setRenderPreview(true);
  }

  const valueVistaPrevia = (e) => {
    e.preventDefault();
    setRenderPreview(true);
  }

  const cleanAll = () => {
    cleanInputs();
    setRenderPreview(true);
  }

  const getPreviewValues = () => {
    
    return {
      codigo: codigo.current.value ?? '',
      descripcion: descripcion.current.value ?? '',
      name: nombre.current.value ?? '',
      precio: precio.current.value ?? '',
      undsPorPlato: undsPorPlato.current.value ?? '',
      tipo: categoria.current.value ?? '',
      img: img.current.value ?? ''
    }
  }


  useEffect(() => {
    setRenderPreview(false);
    if (renderEditForm) {
      setFormValues();
      setRenderEditForm(false);
    }
    
  }, [renderPreview, renderEditForm]);

  return (
    <div className="title">
      <h1>REGISTRO DE PRODUCTOS</h1>
      <form style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <label>
          <p>Nombre</p>
          <input
            id="nombreProducto"
            name="nombreProducto"
            type="text"
            required
            maxLength="15"
            placeholder='Nombre del producto'
            ref={nombre}
          />
        </label>
        <div className="contenedorProductosInterno">
          <label>
            <p>Precio</p>
            <input
              id="precioProducto"
              name="precioProducto"
              type="text"
              required
              maxLength="25"
              placeholder='0.00'
              ref={precio}
            />
          </label>
          <label>
            <p>Categoría</p>
            <select
              id="categoria"
              name={"categoria"}
              ref={categoria}
            >
              {categorias.map((item, i) => (

                <option key={`categoria${i}`} value={item.categoria.toLowerCase()}>
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
              id="unidadesPorPlato"
              name="unidadesPorPlato"
              type="text"
              required
              maxLength="25"
              placeholder='Min 1 und'
              ref={undsPorPlato}
            />
          </label>
          <label>
            <p>Código</p>
            <input
              id="codigoProducto"
              name="codigoProducto"
              type="text"
              required
              maxLength="25"
              placeholder='P000'
              ref={codigo}
            />
          </label>
        </div>
        <label>
          <p>Descripción </p>
          <input
            id="descripcionProducto"
            name="descripcionProducto"
            type="text"
            required
            maxLength="25"
            placeholder='Descripción del producto'
            ref={descripcion}
          />
        </label>
        <label>
          <p>Imagen </p>
          <input 
            id="imgProducto"
            name="imgProducto"
            type="text"
            required
            //maxLength="25"
            ref={img}
            placeholder='Ingrese el URL de la imagen'
          />
        </label>
        <button 
          onClick={valueVistaPrevia}
          style={{ backgroundColor:'black', color:'var(--color-beige)', borderRadius:'50px', display:'flex', justifyContent: 'center', alignItems:'center', justifyItems:'center', margin:'1rem 0', padding:'0.5rem 1rem', alignText:'center', cursor:'pointer', width:'auto', alignSelf:'center'}}
        >
          Cargar vista previa
        </button>
      </form>
      <div className='vistaPreviaCenter'>
      <VistaPrevia values={getPreviewValues()} />
      </div>
      <BtnsConfirmarYCancelar submit={onSubmit} clear={cleanAll}/>
    </div>
  )
}

export default FormProducto