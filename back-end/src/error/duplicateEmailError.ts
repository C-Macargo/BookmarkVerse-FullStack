import { ApplicationError } from '@/util/errorProtocol';

export function duplicatedEmailError(): ApplicationError {
  return {
    name: 'duplicatedEmailError',
    message: 'Email is already registered!',
  };
}
