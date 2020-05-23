import { DefinePlugin } from 'webpack';
import env from 'dotenv';

const dotenv = env.config({ path: '.env' });

export default (environment) => new DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify(environment),
		API_URL: JSON.stringify(dotenv.parsed ? dotenv.parsed.API_URL : process.env.API_URL ),
	}
})
