import { useParams } from "react-router-dom";
import useFetchBooks from "../hooks/useFetchBooks";
import BookItem from "../components/searchPageComponents/BookItem";

function SearchPage() {
	const { title } = useParams();
	const { books } = useFetchBooks(title);
	
	return (
		<div className="flex flex-col h-screen items-center pt-[106px]">
			<div className="flex flex-col justify-center items-center flex-grow">
				<h1 className="text-4xl text-white mb-6 font-semibold tracking-wide shadow-lg">
					{title}
				</h1>
				<div className="grid grid-cols-2 gap-8">
					{books && books.items && books.items.map((books) => (
						<BookItem key={books.id} books={books} />
					))}
				</div>
			</div>
		</div>
	);
}

export default SearchPage;
