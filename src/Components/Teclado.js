import React from "react";
import { Row, Col } from "reactstrap";

export const Teclado = ({ abecedario,submit }) => {
  return (
    <div>
      <Row className="d-flex justify-content-center">
        {abecedario.map((item) => {
          return (
            <Col sm="3" className='p-2'>
                  <button value={item} className="btn btn-success p-3" onClick={e => submit(e.target.value)}>{item}</button>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Teclado;
