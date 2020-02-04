import enhancedRoute from 'utils/enhanced-route'

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
		path: '/dashboard',
		title: 'Dashboard',
		exact: true,
		component: enhancedRoute('dashboard')
	},
	{
		component: enhancedRoute('404')
	}
]

export default undefined
