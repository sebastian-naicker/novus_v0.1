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
		path: '/todo',
		title: 'Todo',
		exact: true,
		component: enhancedRoute('todo'),
	},
	{
		component: enhancedRoute('404'),
	},
];

export default undefined;
