import { errorHandler } from '@/middleware/errorHandlerMiddleware';
import { authenticationService } from '@/service/authenticationService';
import { ApplicationError } from '@/util/errorProtocol';
import { loginRequestBody, registerRequestBody } from '@/util/interface';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function registerUser(req: Request, res: Response) {
  const { email, password, name, image_url }: registerRequestBody = req.body;
  try {
    await authenticationService.createUser({
      email,
      password,
      name,
      image_url,
    });
    return res.status(httpStatus.CREATED).send({});
  } catch (err: unknown) {
    const error = err as ApplicationError | Error;
    errorHandler(error, req, res);
  }
}

export async function loginUser(req: Request, res: Response) {
  const { email, password }: loginRequestBody = req.body;
  try {
    const userData = await authenticationService.loginUser({ email, password });
    return res.status(httpStatus.OK).send(userData);
  } catch (err: unknown) {
    const error = err as ApplicationError | Error;
    errorHandler(error, req, res);
  }
}
