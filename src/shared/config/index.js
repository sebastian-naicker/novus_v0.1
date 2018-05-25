import enhancedRoute from 'utils/enhanced-route';

export const routes = [
	{
		path: '/',
		component: enhancedRoute('home'),
	},
	{
		path: '/about',
		component: enhancedRoute('about'),
	},
	{
		path: '/contact',
		component: enhancedRoute('contact'),
	},
	{
		path: '',
		component: enhancedRoute('404'),
	},
];

export default undefined;
