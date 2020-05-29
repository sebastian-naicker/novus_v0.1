import io from 'socket.io-client'
import ioEvents from '@constants/index';
const API_URL = process.env.API_URL;

const socket = io(`${API_URL}/`);

export const socketConnect = appId => {
	socket.emit(ioEvents.IO_CONNECTION, appId)
}

export default socket
