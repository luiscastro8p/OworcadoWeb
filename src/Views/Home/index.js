import React, { useEffect, useReducer } from 'react';
import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';
import { Row, Col, Card, FormGroup, Label, Input, Button } from 'reactstrap';
import './style.css';

import socketIOClient from 'socket.io-client';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Home = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const socket = socketIOClient('localhost:8080');

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
      <Row
        className='d-flex justify-content-center align-items-center'
        style={{ height: '800px', width: '100%' }}
      >
        <Col sm='12' md='12' lg='6' xl='6'>
          <Card>
            <div className='text-center m-4'>
              <p>hola</p>
            </div>
            <FormGroup className='m-4'>
              <Label for='nickname'>Nickname</Label>
              <Input
                onChange={handlename}
                value={state.user.nick}
                type='text'
                name='nickname'
                id='nickname'
              />
            </FormGroup>
            <Button onClick={registrarse} color='success'>
              Entrar
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Home;
