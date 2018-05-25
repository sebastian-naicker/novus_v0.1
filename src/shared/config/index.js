import enhancedRoute from 'utils/enhanced-route';

export const routes = [
	{
		path: '/',
		title: 'Home',
		exact: true,
		component: enhancedRoute('home'),
	},
	{
		path: '/about',
		title: 'About',
		exact: true,
		component: enhancedRoute('about'),
	},
	{
		path: '/contact',
		title: 'Contact',
		exact: true,
		component: enhancedRoute('contact'),
	},
	{
		component: enhancedRoute('404'),
	},
];

export default undefined;
