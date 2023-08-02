import { useState } from "react";
import useLogin from "../../hooks/useLogin";

function LoginModal({ isVisible, onClose }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useLogin();

	const handleSubmit = (event) => {
		event.preventDefault();
		setEmail("");
		setPassword("");
		login({ email, password });
		onClose(false);
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className=" bg-gray-700 p-5 rounded shadow-lg w-1/3 text-white">
				<h1 className="text-xl font-bold mb-4">Login</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						className="w-full p-2 mb-3 border border-gray-300 rounded text-black"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<input
						type="password"
						className="w-full p-2 mb-3 border border-gray-300 rounded text-black"
						placeholder="Password"
						value={password}
						minLength={6}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<div className="flex">
						<button
							type="button"
							className="w-full p-2 m-2 bg-black text-white rounded "
							onClick={onClose}>
							Cancel
						</button>
						<button
							className="w-full  p-2 m-2 bg-purple-700 text-white rounded"
							type="submit">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginModal;
