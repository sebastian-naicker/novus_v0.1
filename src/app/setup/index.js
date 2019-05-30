//eslint-disable-next-line
import sha256 from 'crypto-js/sha256';
import { storage } from 'utils/storage';

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

const init = () => {
	const instanceId = createInstanceString();
	const appId = sha256(instanceId).toString();
	storeAppId(appId);
};

export default init;
