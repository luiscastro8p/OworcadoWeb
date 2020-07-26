import React, { useEffect, useReducer } from "react";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import "./style.css";
import { Row, Col, Container } from "reactstrap";

const Room = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
           <h3>Salas disponibles</h3>
          </Col>
          <Col>
            <p>hola</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Room;
