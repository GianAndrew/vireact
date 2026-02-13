import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
	const [links] = useState([
		{ to: '/', label: 'Home' },
		{ to: '/about', label: 'About' },
		{ to: '/products', label: 'Products' },
	]);
	return (
		<div className="bg-blue-500">
			<nav className="container mx-auto flex justify-between items-center gap-2 py-4">
				<div>
					<h1 className="text-white font-bold">Vireact</h1>
				</div>
				<ul className="flex justify-between items-center gap-4">
					{links.map((link) => (
						<li key={link.to} className="cursor-pointer">
							<Link to={link.to} className="text-white text-sm hover:text-slate-200">
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
