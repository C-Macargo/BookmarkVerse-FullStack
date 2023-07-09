import { useState } from "react";

function SearchBar() {
	const [searchQuery, setSearchQuery] = useState("");

	async function handleSubmit() {
	}

	return (
		<form onSubmit={handleSubmit} className=" inline-flex items-center space-x-2">
			<div className="relative rounded-full">
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="py-2 px-4 rounded-full h-1/2"
					placeholder="Search for books..."
				/>
				<button
					type="submit"
					className="absolute right-0 top-1/2 py-2 px-4 rounded-full text-purple-700 transform -translate-y-1/2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-4 h-4">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
		</form>
	);
}

export default SearchBar;