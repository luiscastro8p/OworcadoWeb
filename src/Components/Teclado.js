import React from 'react';
import { Row } from 'reactstrap';
import './style.css';

export const Teclado = ({ abecedario, submit }) => {
  return (
    <div>
      <Row className='contenedordeletras'>
        {abecedario.map((item, idx) => {
          return (
            <button
              disabled={!item.status}
              value={item.letter}
              className={
                item.status
                  ? 'btn btn-success p-3 botonletra'
                  : 'btn btn-danger p-3 botonletra'
              }
              onClick={e => submit(idx)}
            >
              {item.letter}
            </button>
          );
        })}
      </Row>
    </div>
  );
};

export default Teclado;
