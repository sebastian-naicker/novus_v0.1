import socket from '@sockets';
import ioEvents from '@constants/index';
import i18n from '@i18n/index';

export const onSocketConnection = (onPending, onSuccess, onError) => {
	socket.on(ioEvents.IO_PENDING, loading => {
		onPending(loading)
	})

	socket.on(ioEvents.IO_ERROR, () => {
		onError({
			status: 'error',
			isRegistered: false,
			message: i18n.statusError
		})
	})

	socket.on(ioEvents.IO_SUCCESS, () => {
		onSuccess({
			status: 'success',
			isRegistered: true,
			message: i18n.statusSuccess
		})
	})
}
