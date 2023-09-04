import { useNavigate } from "react-router-dom";

function BookItem({ books }) {
	const navigate = useNavigate();
	console.log(books);
	function handleClick() {
		navigate(`/book/${books.id}`);
	}

	return (
		<div
			key={books.id}
			className="flex items-start w-[520px] h-36 overflow-hidden rounded-xl space-x-6 bg-[#3F3A6B] bg-opacity-90 shadow-xl"
			onClick={handleClick}>
			{books.volumeInfo?.imageLinks?.thumbnail ? (
				<img
					src={books.volumeInfo.imageLinks.thumbnail}
					alt="Thumbnail"
					className="flex-shrink-0 mr-4 h-full w-28"
				/>
			) : (
				<NoImage/>
			)}
			<div className="flex flex-col text-white py-2">
                <Title title={books.volumeInfo?.title} />
                <Authors author = {books.volumeInfo?.authors}/>
			</div>
		</div>
	);
}


function NoImage() {
    return (
        <div className="flex-shrink-0 mr-4 h-full w-28 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
        </div>
    );
}

function Title({ title }) {
    return(
        <h3>
            <span className="font-bold text-xl">Title:</span>{" "}
            {title}
        </h3>
    );
}

function Authors({ author }) {
    return(
        <p className="truncate">
        <span className="font-bold text-xl">Author:</span>{" "}
        {author}
    </p>
    );
}




export default BookItem;
