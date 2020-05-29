import io from 'socket.io-client'
const API_URL = process.env.API_URL;

const socket = io(`${API_URL}/`);

export default socket
