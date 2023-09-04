import { useNavigate } from "react-router-dom";

function Logo() {

	const navigate = useNavigate()

	return (
		<div className=" inline-flex">
			<img
				onClick={() => navigate("/")}
				src="https://i.imgur.com/oPx2tjf.png"
				className="w-16 h-12 -mt-2 -mb-2">
            </img>
			<h1 
				onClick={() => navigate("/")}	
				className="text-white text-3xl font-bold hover:text-purple-600 transition duration-1000 ease-in-out">
				BookmarkVerse
			</h1>
		</div>
	);
}

export default Logo;
