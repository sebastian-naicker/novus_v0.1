//eslint-disable-next-line
import sha256 from 'crypto-js/sha256';
import { storage } from 'utils/storage';
import socket from 'sockets'
import ioEvents from '@constants'

const APP_ID = 'APP_ID';

const createInstanceString = () => {
	const { appCodeName, appName, oscpu } = window.navigator;
	return `${appCodeName}.${appName}.${oscpu}`;
};

const storeAppId = (appId) => {
	const currentAppId = storage.getLocal(APP_ID);
	if (!currentAppId || currentAppId === '') {
		storage.storeLocal(APP_ID, appId);
	}
};

const connectSocket = appId => {
	socket.emit(ioEvents.IO_CONNECTION, appId)
}

const init = () => {
	const instanceId = createInstanceString();
	const appId = sha256(instanceId).toString();
	connectSocket(appId)
	storeAppId(appId);
};

export default init;
