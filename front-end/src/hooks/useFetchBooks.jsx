import { useEffect, useState } from "react";
import axios from "axios";

function useFetchBooks(title) {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const body = {title: title}
			setIsLoading(true);
			setError(null);
			try {
				const response = await axios.post(
					`${
						import.meta.env.VITE_REACT_APP_API_BASE_URL
					}/book/find`, body
				);
				setBooks(response.data);
			} catch (error) {
				setError(error.response.data.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, [title]);

	return { books, isLoading, error };
}

export default useFetchBooks;
