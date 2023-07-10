import { useState } from "react";
import LoginModal from "./LoginModal";
import { useUser } from "../contexts/userContext";
import UserDropDownMenu from "./UserDropDown";

function NavLink() {
	const [modalVisible, setModalVisible] = useState(false);
	const { userData } = useUser();
	return (
		<ul className="flex space-x-4">
            {(userData && userData.length !== 0) ? (
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
						onClick={() => setModalVisible(true)}
					/>
					<LoginModal
						isVisible={modalVisible}
						onClose={() => setModalVisible(false)}
					/>
					<Link text="Register" href="/" />
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
