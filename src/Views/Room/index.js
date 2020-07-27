import React, { useEffect, useReducer } from 'react';
import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';
import './style.css';
import { Row, Col, Container } from 'reactstrap';
import { Modall } from '../../Components/Modall';

import { socket } from '../../socket';

const Room = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    socket.emit('get-rooms');
    socket.on('get-rooms', rooms => {
      dispatch({ type: actions.fetchRooms, payload: rooms });
    });
    socket.on('new-room', id => {
      dispatch({ type: actions.Modal, payload: false });
      history.push(`/rooms/${id}`);
    });
  }, []);

  const join_room = id => {
    socket.emit('join-room', id);
  };

  const closeModal = () => {
    dispatch({ type: actions.SetValue, var: 'roomValue', payload: '' });
    dispatch({ type: actions.Modal, payload: false });
  };
  const openModal = () => {
    dispatch({ type: actions.Modal, payload: true });
  };
  const GetText = value => {
    dispatch({ type: actions.SetValue, var: 'roomValue', payload: value });
  };

  const crear_room = () => {
    let data = {
      id: parseInt(state.roomValue),
      users: 1,
    };
    socket.emit('new-room', data);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <div className='title-border m-5'>
                  <h3>Salas disponibles</h3>
                </div>
              </Col>
              <Col
                xl='3'
                className='d-flex justify-content-center align-items-center'
              >
                <button className='btn btn-info' onClick={openModal}>
                  Crear sala
                </button>
              </Col>
              <Col xl='12'>
                {state.room.map(item => {
                  return (
                    <div
                      onClick={() => join_room(item.id)}
                      className='card-rooms m-3'
                    >
                      <Row
                        className='text-center p-4'
                        onClick={e => history.push('/rooms/' + item.id)}
                      >
                        <Col lg='6' xl='6'>
                          {item.id}
                        </Col>
                        <Col lg='6' xl='6'>
                          {item.users}/2
                        </Col>
                      </Row>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {state.modal && (
        <Modall
          open={state.modal}
          tittle='Crear sala'
          GetTexts={e => GetText(e.target.value)}
          btnText1='Cerrar'
          btnText2='Crear'
          hide={closeModal}
          submit={crear_room}
        />
      )}
    </>
  );
};
export default Room;
