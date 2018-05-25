import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({ app }) => ({
	...app,
});

export default connect(mapStateToProps)(Home);
