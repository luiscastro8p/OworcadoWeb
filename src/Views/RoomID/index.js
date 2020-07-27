import React, { useEffect, useReducer } from "react";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { Row, Col } from "reactstrap";
import equis from "./equis.png";
import Modall from "../../Components/Modall";
import "./style.css";
import Teclado from "../../Components/Teclado";

const RoomID = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    const start = setTimeout(() => {
      dispatch({ type: actions.startRoom, payload: true });
    }, 1000);
    return () => clearTimeout(start);
  }, []);
  const letra = (value) => {
    console.log(value);
    let array = state.text;
    array.push(value);
    dispatch({ type: actions.SetValue, var: "text", payload: array });
  };
  return (
    <>
      {state.start ? (
        <Row className="text-center d-flex justify-content-center">
          <Col sm="12" className="mt-5 mb-5">
            <div>
              <h3>Oworcado</h3>
              <div className='d-flex justify-content-center'>
                {state.text.length > 0 && (
                  <div>
                    <div className="pos-title">
                      {state.text.map((item) => {
                        return <p className="txt-title">{item}</p>;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col sm="3">
            {state.room.perdidas.length >= 1 && (
              <img src={equis} alt="equis" width="80" />
            )}
          </Col>
          <Col sm="3">
            {state.room.perdidas.length >= 2 && (
              <img src={equis} alt="equis" width="80" />
            )}
          </Col>
          <Col sm="3">
            {state.room.perdidas.length === 3 && (
              <img src={equis} alt="equis" width="80" />
            )}
          </Col>
          <Col sm="8">
            <p>hola</p>
          </Col>
          <Col sm="3">
            <h3>Inserta un texto</h3>
            <Teclado abecedario={state.abecedario} submit={letra} />
          </Col>
        </Row>
      ) : (
        <div>
          {state.modal && (
            <Modall open={state.modal} tittle="Oworcado" loading={true} />
          )}
        </div>
      )}
    </>
  );
};
export default RoomID;
