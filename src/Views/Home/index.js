import React, { useEffect, useReducer } from "react";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { Row, Col, Card, FormGroup, Label, Input, Button } from "reactstrap";
import "./style.css";

const Home = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, []);

  return (
    <>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ height: "800px", width: "100%" }}
      >
        <Col sm="12" md="12" lg="6" xl="6">
          <Card>
            <div className="text-center m-4">
              <p>hola</p>
            </div>
            <FormGroup className="m-4">
              <Label for="nickname">Nickname</Label>
              <Input type="text" name="nickname" id="nickname" />
            </FormGroup>
           <Button color='success'>Entrar</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Home;
