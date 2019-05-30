import { connect } from 'react-redux';
import { setPageTitle, restoreAppState } from 'local-redux/global/actions';
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

export default connect(mapStateToProps, null, mergeProps)(Home);
