import styled, { css } from 'styled-components';

const colores = {
  borde: '#0075FF',
  error: '#bb2929',
  exito: '#66B666',
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${(props) => props.valido === 'false'
    && css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) => props.valido === 'true'
    && css`
      border: 3px solid transparent;
    `}

  ${(props) => props.valido === 'false'
    && css`
      border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${(props) => props.valido === 'true'
    && css`
      display: none;
    `}

  ${(props) => props.valido === 'false'
    && css`
      display: block;
    `}
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  @media (max-width: 750px) {
    grid-column: span 1;
  }
`;

const Boton = styled.button`
  height: 45px;
  line-height: 45px;
  width: 60%;
  margin: 1rem;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const MensajeExito = styled.p`
  text-align: center;
  background: #71ce8e;
  width: 60%;
  border-radius: 3px;
  padding: 1rem;
  color: ${colores.exito};
`;

const MensajeError = styled.p`
  text-align: center;
  background: #f66060;
  border-radius: 3px;
  padding: 1rem;
  width: 60%;
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
};
