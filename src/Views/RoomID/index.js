import React, { useEffect, useReducer } from 'react';
import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';
import { Row, Col, Container } from 'reactstrap';
import equis from './equis.png';
import Modall from '../../Components/Modall';
import './style.css';
import Teclado from '../../Components/Teclado';
import { socket } from '../../socket';

import Swal from 'sweetalert2';

const RoomID = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actions.resetAll });
    socket.emit('cuantossomos');
    socket.on('empezarPartida', palabra => {
      dispatch({ type: actions.startRoom, payload: true });
      dispatch({ type: actions.setWord, payload: palabra });
    });
    socket.on('selec-letra', value => {
      dispatch({ type: actions.selectLetter, payload: value });
    });
  }, [history]);

  const letra = value => {
    dispatch({ type: actions.selectLetter, payload: value });
    socket.emit('selec-letra', value);
  };

  state.derrota &&
    Swal.fire({
      icon: 'failed',
      title: 'Derrota',
      text: `Han perdido la partida unu`,
    }).then(() => {
      history.goBack();
      socket.emit('finish');
    });

  state.victoria &&
    Swal.fire({
      icon: 'success',
      title: 'Victoria!',
      text: `Se han salvado de esta`,
    }).then(() => {
      history.goBack();
      socket.emit('finish');
    });

  return (
    <>
      {state.start ? (
        <Container>
          <Row className='text-center d-flex justify-content-center'>
            <Col sm='12' className='mt-5 mb-5'>
              <div>
                <h3>OWO-AHORCADO</h3>
                <div className='d-flex justify-content-center'>
                  {state.text.length > 0 && (
                    <div>
                      <div className='pos-title'>
                        {state.text.map((item, idx) => {
                          return (
                            <div key={idx} className='letterContainer'>
                              <span
                                className={
                                  item.status ? 'txt-title-black' : 'txt-title'
                                }
                              >
                                {item.letter}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm='12'>
              <div className='equis'>
                {state.fails.map(() => {
                  return <img src={equis} className='equistyle' />;
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm='12'>
              {state.start && (
                <Teclado abecedario={state.abecedario} submit={letra} />
              )}
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          {state.modal && (
            <Modall open={state.modal} tittle='Oworcado' loading={true} />
          )}
        </div>
      )}
    </>
  );
};
export default RoomID;
