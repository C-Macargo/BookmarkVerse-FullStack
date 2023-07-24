import { ApplicationError } from '@/util/errorProtocol';

export function bookNotFoundError(): ApplicationError {
  return {
    name: 'BookNotFoundError',
    message: 'Book could not be found!',
  };
}
