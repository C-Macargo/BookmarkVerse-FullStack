import { useEffect, useState } from "react";
import axios from "axios";

function useFetchPopularBooks() {
	const [popularBooks, setPopularBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			setError(null);

			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_REACT_APP_API_BASE_URL
					}/book/find/popular`
				);
				setPopularBooks(response.data);
			} catch (error) {
                console.log(error)
				setError(error.response.data.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	return { popularBooks, isLoading, error };
}

export default useFetchPopularBooks;
