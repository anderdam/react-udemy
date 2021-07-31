import React from 'react';
import PropTypes from 'prop-types';
import './Tarefas.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';// Importação de FaEdit e FaWindowClose para Tarefas

export default function Tarefas({ handleEdit, handleDelete, tarefas }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose className="delete" onClick={(e) => handleDelete(e, index)} />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
};
