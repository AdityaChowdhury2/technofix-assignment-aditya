import { Outlet, ScrollRestoration } from 'react-router-dom';
const MainLayout = () => {
	return (
		<div>
			<Outlet />
			<ScrollRestoration />
		</div>
	);
};

export default MainLayout;
