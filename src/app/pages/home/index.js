import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({ global }) => ({
	...global,
});

export default connect(mapStateToProps)(Home);
