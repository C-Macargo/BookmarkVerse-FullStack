import { ApplicationError } from '@/util/errorProtocol';

export function duplicatedEmailError(): ApplicationError {
  return {
    name: 'DuplicatedEmailError',
    message: 'Email is already registered!',
  };
}
