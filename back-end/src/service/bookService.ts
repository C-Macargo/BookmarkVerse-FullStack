import { invalidSearchError } from '@/error/invalidSearchError';
import { bookRepository } from '@/repository/bookRepository';
import searchBooks from '@/util/googleApiRequest';
import { apiBook } from '@/util/interface';

async function findBooks(title: string) {
  try {
    const books = await searchBooks(title);
    if (!books) throw invalidSearchError();
    const googleBooksIds = books.items.map((book: apiBook) => book.id);
    const existingBookIds = await bookRepository.getExistingBookIds(googleBooksIds);
    const newBooks = books.items.filter((book: apiBook) => !existingBookIds.includes(book.id));
    if (newBooks.length > 0) {
      await bookRepository.insertBooks(newBooks);
    }
    return books;
  } catch (error) {
    console.error(`Error occurred while fetching books: ${error}`);
    throw invalidSearchError();
  }
}

export const bookService = {
  findBooks,
};
