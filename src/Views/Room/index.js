import React, { useEffect, useReducer } from "react";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import "./style.css";
import { Row, Col, Container, Button } from "reactstrap";
import { Modall } from "../../Components/Modall";

const Room = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
console.log(state);
  useEffect(() => {}, []);
  const modal = () => {};
  const closeModal = () => {
    dispatch({ type: actions.Modal, payload: false });
  };
  const openModal = () => {
    dispatch({ type: actions.Modal, payload: true });
  };
  const GetText = (value) => {
    dispatch({ type: actions.SetValue, var: "roomValue", payload: value });
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="ver-line" style={{ height: "900px" }}>
            <Row>
              <Col>
                <div className="title-border m-5">
                  <h3>Salas disponibles</h3>
                </div>
              </Col>
              <Col
                xl="3"
                className="d-flex justify-content-center align-items-center"
              >
                <button className="btn btn-info" onClick={openModal}>
                  Crear sala
                </button>
              </Col>
            </Row>
          </Col>
          <Col>
            <p>hola</p>
          </Col>
        </Row>
      </Container>
      {state.modal && (
        <Modall
          open={state.modal}
          tittle="Crear sala"
          GetTexts={(e) => GetText(e.target.value)}
          btnText1="Cerrar"
          btnText2="Crear"
          submit={modal}
          hide={closeModal}
        />
      )}
    </>
  );
};
export default Room;
