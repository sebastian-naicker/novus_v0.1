import enhancedRoute from '@hocs/enhanced-route'

export const paths = {
	DASHBOARD: '/dashboard',
	ROOT: '/'
}

export const routes = [
	{
		path: '/',
		title: 'Home',
		exact: true,
		component: enhancedRoute('home')
	},
	{
		path: '/about',
		title: 'About',
		exact: true,
		component: enhancedRoute('about')
	},
	{
		component: enhancedRoute('404')
	}
]

export default undefined