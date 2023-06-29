import { duplicatedEmailError } from '@/error/duplicateEmailError';
import { invalidCredentialsError } from '@/error/invalidCredentialsError';
import { authRepository } from '@/repository/authenticationRepository';
import { LoginResponse, loginRequestBody, registerRequestBody } from '@/util/interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function createUser({ email, password, name, image_url }: registerRequestBody) {
  const emailExists = await authRepository.findUserByEmail(email);
  if (emailExists) throw duplicatedEmailError();

  const hashedPassword = await bcrypt.hash(password, 12);
  await authRepository.createUser(email, hashedPassword, name, image_url);
}

async function loginUser({ email, password }: loginRequestBody): Promise<LoginResponse> {
  const user = await authRepository.findUserByEmail(email);
  if (!user) throw invalidCredentialsError();

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw invalidCredentialsError();

  const userData = await authRepository.findUserData(email);
  const session = await authRepository.findSessionByUserId(user.id as number);
  if (!session || isTokenExpired(session.token)) {
    const newToken = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    await authRepository.upsertSessionToken(user.id, newToken);
    return { userData, token: newToken };
  }
  return { userData, token: session.token };
}

function isTokenExpired(token: string): boolean {
  const decoded = jwt.decode(token) as { exp: number } | null;
  if (!decoded) return true;
  return decoded.exp < Math.floor(Date.now() / 1000);
}

export const authenticationService = {
  createUser,
  loginUser,
};
