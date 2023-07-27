import { bookNotFoundError } from '@/error/bookNotFoundError';
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
    throw invalidSearchError();
  }
}

async function findSpecificBook(googleBooksId: string) {
  const book = await bookRepository.findSpecificBook(googleBooksId);
  if (!book) throw bookNotFoundError();
  return book;
}

async function findPopularBooks() {
  const books = await bookRepository.getPopularBooks();
  if (!books) throw bookNotFoundError();
  return books;
}

export const bookService = {
  findBooks,
  findSpecificBook,
  findPopularBooks,
};
