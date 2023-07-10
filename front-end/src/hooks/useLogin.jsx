import { useEffect, useState } from "react";
import axios from "axios";

function useLogin() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
    const [credentials, setCredentials] = useState(null);

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
                console.log(response)
                setData(response.data);
                localStorage.setItem('userData', JSON.stringify(response.data));
            } catch (error) {
                console.log(error.response.data.message)
                setError(error.response.data.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
	}, [credentials]);

    const login = (credentials) => {
        setCredentials(credentials);
    };

	return { data, isLoading, error, login };
}

export default useLogin;
