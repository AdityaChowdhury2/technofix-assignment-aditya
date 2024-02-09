import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import UserDetails from '../pages/UserDetails';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'users/:id',
				element: <UserDetails />,
				loader: ({ params }) => {
					return fetch(`https://dummyjson.com/users/${params.id}`);
				},
			},
		],
	},
]);
