import socketIOClient from 'socket.io-client';

export const socket = socketIOClient('localhost:8080');
