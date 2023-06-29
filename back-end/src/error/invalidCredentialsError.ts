import { ApplicationError } from '@/util/errorProtocol';

export function invalidCredentialsError(): ApplicationError {
  return {
    name: 'invalidCredentialsError',
    message: 'Email or password are incorrect!',
  };
}
