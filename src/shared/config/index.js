import enhancedRoute from 'utils/enhanced-route';

const routes = [
	{
		path: '/',
		component: enhancedRoute('home'),
	},
	{
		path: '',
		component: enhancedRoute('404'),
	},
];

export default routes;
