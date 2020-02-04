import { connect } from 'react-redux';
import { setPageTitle, restoreAppState } from '@redux/global/actions';
import lifecycle from '@utils/lifecycle'
import Home from './home';

const mapStateToProps = ({ global }) => ({
	...global,
});

const mergeProps = (stateProps, { dispatch }) => ({
	...stateProps,
	didMount() {
		dispatch(setPageTitle('Home'));
	},
	willUnmount() {
		dispatch(restoreAppState());
	},
});

export default connect(mapStateToProps, null, mergeProps)(lifecycle({ didMount: 'didMount' })(Home));
