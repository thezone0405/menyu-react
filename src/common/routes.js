import App from 'client/app'
import Dashboard from 'client/containers/pages/dashboard'

const routes = [
    {
        component: App,
        routes:[
            {
                component: Dashboard,
                exact: true,
                path:'/'
            },
            {
				path      : '*',
				component : Dashboard
			}
        ]
    }
]

export default routes