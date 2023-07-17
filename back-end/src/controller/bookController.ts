import { errorHandler } from '@/middleware/errorHandlerMiddleware';
import { bookService } from '@/service/bookService';
import { ApplicationError } from '@/util/errorProtocol';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function findBooks(req: Request, res: Response) {
  const { title } = req.body as { title: string };
  try {
    const books = await bookService.findBooks(title);
    return res.status(httpStatus.OK).send(books);
  } catch (err: unknown) {
    const error = err as ApplicationError | Error;
    errorHandler(error, req, res);
  }
}
