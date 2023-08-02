import { useEffect, useState } from "react";
import useRegister from "../../hooks/useRegister";
import showToast from "../Toast";

function RegisterModal({ isVisible, onClose }) {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [image_url, setImage] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isMatch, setIsMatch] = useState(true);

	const { register } = useRegister();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!isMatch) {
			showToast('error', `Passwords do not match!`);
			return;
		}
		setName("");
		setEmail("");
		setImage("");
		setPassword("");
		setConfirmPassword("");
		onClose(false);
		register({ name, email, image_url, password });
	};

	useEffect(() => {
		setIsMatch(password === confirmPassword);
	}, [password, confirmPassword]);

	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className=" bg-gray-700 p-5 rounded shadow-lg w-1/3 text-white">
				<h1 className="text-xl font-bold mb-4">Register</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="name"
						className="w-full p-2 mb-3 border border-gray-300 rounded text-black"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>

					<input
						type="email"
						className="w-full p-2 mb-3 border border-gray-300 rounded text-black"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<input
						type="url"
						className="w-full p-2 mb-3 border border-gray-300 rounded text-black"
						placeholder="Image Url"
						value={image_url}
						onChange={(e) => setImage(e.target.value)}
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

					<input
						type="password"
						className="w-full p-2 mb-3 border border-gray-300 rounded text-black"
						placeholder="Confirm Password"
						value={confirmPassword}
						minLength={6}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
					{!isMatch && <p>Passwords do not match!</p>}

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

export default RegisterModal;
