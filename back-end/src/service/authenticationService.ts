import { duplicatedEmailError } from '@/error/duplicateEmailError';
import { authRepository } from '@/repository/authenticationRepository';
import { registerRequestBody } from '@/util/interface';
import bcrypt from 'bcrypt';

async function createUser({ email, password, name, image_url }: registerRequestBody) {
  const emailExists = await authRepository.findUserByEmail(email);
  if (emailExists) throw duplicatedEmailError();
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await authRepository.createUser(email, hashedPassword, name, image_url);
  return user;
}

export const authenticationService = {
  createUser,
};
