import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../components/contexts/userContext";

function useLogin() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [credentials, setCredentials] = useState(null);

	const { setUserData } = useUser();

	useEffect(() => {
		async function fetchData() {
			if (!credentials) {
				return;
			}
			setIsLoading(true);
			setError(null);
			try {
				const response = await axios.post(
					`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/login`,
					credentials
				);
				console.log(response);
				setData(response.data);
				setUserData(response.data);
			} catch (error) {
				console.log(error.response.data.message);
				setError(error.response.data.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, [credentials, setUserData]);

	const login = (credentials) => {
		setCredentials(credentials);
	};

	return { data, isLoading, error, login };
}

export default useLogin;
