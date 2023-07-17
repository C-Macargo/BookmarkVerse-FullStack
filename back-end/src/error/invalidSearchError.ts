import { ApplicationError } from '@/util/errorProtocol';

export function invalidSearchError(): ApplicationError {
  return {
    name: 'InvalidSearchError',
    message: 'Invalid Search!',
  };
}
