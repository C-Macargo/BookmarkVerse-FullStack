import NavLink from "./NavLinks";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Navbar() {
	return (
		<nav className="flex items-center justify-evenly mx-auto px-6">
			<Logo />
			<SearchBar />
			<NavLink/>
		</nav>
	);
}

export default Navbar;
