import React from 'react';
import PropTypes from 'prop-types';
import './Form.css'; // Importar o css dor Form
import { FaPlus } from 'react-icons/fa';// Importação de componentes para o Form

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form className="form" action="#" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={novaTarefa} />
      <button type="submit">
        <FaPlus />
        {' '}
        FINALIZAR COMPRA
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
