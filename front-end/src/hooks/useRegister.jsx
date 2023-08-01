import { useEffect, useState } from "react";
import axios from "axios";
import { showToast } from "../components/Toast";

function useRegister() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [credentials, setCredentials] = useState(null);

	useEffect(() => {
		async function fetchData() {
			if (!credentials) {
				return;
			}
            console.log(credentials)
			setIsLoading(true);
			setError(null);
			try {
				const response = await axios.post(
					`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/register`,
					credentials
				);
				console.log(response);
				setData(response.data);
				showToast('sucess', 'Register Successful!');
			} catch (error) {
				showToast('error', `${error.response.data.message}`);
				setError(error.response.data.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, [credentials]);

	const register = (credentials) => {
		setCredentials(credentials);
	};

	return { data, isLoading, error, register };
}

export default useRegister;
