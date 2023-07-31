import { useState } from "react";
import LoginModal from "./LoginModal";
import { useUser } from "../contexts/userContext";
import UserDropDownMenu from "./UserDropDown";
import RegisterModal from "./RegisterModal";

function NavLink() {
	const [loginModalVisible, setLoginModalVisible] = useState(false);
	const [registerModalVisible, setRegisterModalVisible] = useState(false);	
	const { userData } = useUser();
	return (
		<ul className="flex space-x-4">
			{userData && userData.length !== 0 ? (
				<>
					<Link text="Home" href="/" />
					<Link text="Bookmarks" href="/" />
					<UserDropDownMenu />
				</>
			) : (
				<>
					<Link text="Home" href="/" />
					<ButtonLink
						text="Login"
						onClick={() => setLoginModalVisible(true)}
					/>
					<LoginModal
						isVisible={loginModalVisible}
						onClose={() => setLoginModalVisible(false)}
					/>
					<ButtonLink
						text="Register"
						onClick={() => setRegisterModalVisible(true)}
					/>
					<RegisterModal
						isVisible={registerModalVisible}
						onClose={() => setRegisterModalVisible(false)}
					/>
				</>
			)}
		</ul>
	);
}

function Link({ text, href }) {
	return (
		<li>
			<a
				href={href}
				className="text-white hover:text-purple-600 transition duration-1000 ease-in-out">
				{text}
			</a>
		</li>
	);
}

function ButtonLink({ text, onClick }) {
	return (
		<li>
			<a
				href="#"
				onClick={onClick}
				className="text-white hover:text-purple-600 transition duration-1000 ease-in-out">
				{text}
			</a>
		</li>
	);
}

export default NavLink;
