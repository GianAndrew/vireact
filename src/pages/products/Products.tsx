import { useQuery } from '@tanstack/react-query';
import axios, { isAxiosError } from 'axios';

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

const Products = () => {
	const products_query = useQuery({
		queryKey: ['products'],

		queryFn: async () => {
			try {
				const response = await axios.get('https://fakestoreapi.com/products');
				return response.data;
			} catch (error) {
				if (isAxiosError(error)) {
					throw new Error(error.response?.data?.message || 'Error fetching products');
				}
				throw new Error('Error fetching products');
			}
		},
	});

	if (products_query.isPending) {
		return <div>Loading...</div>;
	}
	if (products_query.isError) {
		return <div>Error: {(products_query.error as Error).message}</div>;
	}
	return (
		<div className="h-screen min-h-screen bg-slate-50">
			<div className="container mx-auto">
				<h1 className="font-bold text-md text-slate-700">Products Page</h1>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{products_query.data.map((product: Product) => (
						<div key={product.id} className="mb-4 p-4 border border-slate-200 rounded bg-white">
							<h2 className="font-semibold text-lg text-slate-800">{product.title}</h2>
							<p className="text-slate-600">${product.price}</p>
							<p className="text-slate-500 mt-2">{product.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
