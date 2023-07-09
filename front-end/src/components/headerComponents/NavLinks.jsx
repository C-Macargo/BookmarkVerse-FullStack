import { useState } from "react";
import LoginModal from "./LoginModal";

function NavLink() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ul className="flex space-x-4">
            <Link text="Home" href="/" />
            <ButtonLink text="Login" onClick={() => setModalVisible(true)}/>
            <LoginModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
            <Link text="Register" href="/" />
        </ul>
    );
}

function Link({text, href}) {
    return (
        <li>
            <a
                href={href}
                className="text-white hover:text-purple-600 transition duration-1000 ease-in-out"
            >
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
                className="text-white hover:text-purple-600 transition duration-1000 ease-in-out"
            >
                {text}
            </a>
        </li>
    );
}

export default NavLink;
