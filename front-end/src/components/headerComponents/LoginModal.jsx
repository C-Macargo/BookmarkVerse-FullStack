import { useState } from "react";

function LoginModal({ isVisible, onClose }){
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		setEmail("");
		setPassword("");
		onClose(false);
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className=" bg-gray-700 p-5 rounded shadow-lg w-1/3 text-white">
				<button className="float-right border-2 pl-1 pr-1" onClick={onClose}>
					X
				</button>

				<h1 className="text-xl font-bold mb-4">Login</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						className="w-full p-2 mb-3 border border-gray-300 rounded text-black"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						className="w-full p-2 mb-3 border border-gray-300 rounded text-black"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						className="w-full p-2 bg-purple-600 text-white rounded"
						type="submit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default LoginModal