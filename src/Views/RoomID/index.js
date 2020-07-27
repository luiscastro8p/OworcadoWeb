import React, { useEffect, useReducer } from "react";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import "./style.css";
import { Row, Col } from "reactstrap";
import equis from "./equis.png";
import Modall from "../../Components/Modall";

const RoomID = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const start = setTimeout(() => {
      dispatch({ type: actions.startRoom, payload: true });
    }, 1000);
    return () => clearTimeout(start);
  }, []);
  return (
    <>
      {state.start ? (
        <Row className="text-center d-flex justify-content-center">
          <Col sm="12" className="mt-5 mb-5">
            <div>
              <h3>Oworcado</h3>
              {state.text.map((item) => {
                return <p style={{ height: "20px" }}>{item}</p>;
              })}
            </div>
          </Col>
          <Col sm="2">
            {state.room.perdidas.length >= 1 && (
              <img src={equis} alt="equis" width="80" />
            )}
          </Col>
          <Col sm="2">
            {state.room.perdidas.length >= 2 && (
              <img src={equis} alt="equis" width="80" />
            )}
          </Col>
          <Col sm="2">
            {state.room.perdidas.length === 3 && (
              <img src={equis} alt="equis" width="80" />
            )}
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
