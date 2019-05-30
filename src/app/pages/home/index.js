import { connect } from 'react-redux';
import { setPageTitle } from 'local-redux/global/actions';
import Home from './home';

const mapStateToProps = ({ global }) => ({
	...global,
});

const mergeProps = (stateProps, { dispatch }) => ({
	...stateProps,
	didMount() {
		dispatch(setPageTitle('About'));
	},
});

export default connect(mapStateToProps, null, mergeProps)(Home);
