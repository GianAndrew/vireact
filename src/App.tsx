import { createBrowserRouter, RouterProvider } from 'react-router';

import PublicLayout from './layouts/PublicLayout';

import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/products/Products';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: '*',
				element: <div>404 Not Found</div>,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
