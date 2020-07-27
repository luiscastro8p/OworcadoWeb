import React, { useEffect, useReducer } from 'react';
import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';
import { Row, Col, Card, FormGroup, Label, Input, Button } from 'reactstrap';
import './style.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import fondo from './loginFondo.jpg'

import { socket } from '../../socket';

const MySwal = withReactContent(Swal);

const Home = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  socket.on('new-user', data => {
    Swal.fire({
      icon: 'success',
      title: 'Felicidades',
      text: `Se ha registrado correctamente como ${data.nick}`,
    });
    history.push('/rooms');
  });

  const handlename = e => {
    e.preventDefault();
    let { value } = e.target;
    dispatch({ type: actions.setterNick, payload: value });
  };

  const registrarse = () => {
    socket.emit('new-user', { nick: state.user.nick });
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${fondo})`, height: "100vh" }}>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ height: "800px", width: "100%" }}
        >
          <Col sm="12" md="12" lg="4" xl="4">
            <Card style={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
              <div className="text-center m-4">
                <h3 style={{ fontWeight: "bold" }}>OWO-AHORCADO</h3>
              </div>
              <FormGroup className="m-4">
                <p for="nickname">
                  <b>Nickname</b>
                </p>
                <Input
                  onChange={handlename}
                  value={state.user.nick}
                  type="text"
                  name="nickname"
                  id="nickname"
                />
              </FormGroup>
              <div className='d-flex justify-content-center align-content-center'>

              <button  className='btn btn-outline-success' onClick={registrarse}  style={{backgroundColor:'rgba(16,65,27,0.5)'}}>
                Entrar
              </button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Home;
