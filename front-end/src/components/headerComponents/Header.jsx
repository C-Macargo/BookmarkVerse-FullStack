import Navbar from "./NavBar";

function Header() {
	return (
		<header className="bg-gray-900 bg-opacity-70 py-4 text-xl fixed top-0 w-full z-10 opacity-80">
			<Navbar/>
		</header>
	);
}

export default Header;
