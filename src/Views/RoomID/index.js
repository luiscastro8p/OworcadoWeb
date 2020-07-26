import React, { useEffect, useReducer } from "react";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import "./style.css";
import { Row, Col } from "reactstrap";
import equis from "./equis.png";

const RoomID = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {}, []);

  return (
    <>
      <Row className="text-center d-flex justify-content-center">
        <Col sm="12" className="mt-5 mb-5">
          <h3>Oworcado</h3>
        </Col>
        <Col sm="2">
          <p>1</p>
          {state.room.perdidas.length >= 1 && (
            <img src={equis} alt="equis" width="80" />
          )}
        </Col>
        <Col sm="2">
          <p>2</p>
          {state.room.perdidas.length >= 2 && (
            <img src={equis} alt="equis" width="80" />
          )}
        </Col>
        <Col sm="2">
          <p>3</p>
          {state.room.perdidas.length === 3 && (
            <img src={equis} alt="equis" width="80" />
          )}
        </Col>
      </Row>
    </>
  );
};
export default RoomID;
