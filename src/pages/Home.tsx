import React from 'react';

const Home = () => {
	const [count, setCount] = React.useState(0);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	return (
		<main className="h-screen min-h-screen bg-slate-50">
			<div className="container mx-auto py-2">
				<h1 className="text-md font-medium text-slate-700">Home Page</h1>
				<div className="mt-4">
					<p className="text-slate-600 mb-2">You clicked the button {count} times.</p>
					<div className="flex gap-2">
						<button onClick={increment} className="text-sm text-slate-500 border border-slate-400 rounded-md py-2 px-4 bg-slate-50 hover:bg-slate-100">
							Increment
						</button>

						<button
							disabled={count === 0}
							onClick={decrement}
							className="text-sm text-slate-500 border border-slate-400 rounded-md py-2 px-4 bg-slate-50 hover:bg-slate-100 disabled:opacity-50"
						>
							Decrement
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
