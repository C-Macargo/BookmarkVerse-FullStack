import { findBooks, findPopularBooks, findSpecificBook } from '@/controller/bookController';
import { validateSchema } from '@/middleware/validateSchemaMiddleware';
import { bookSchema } from '@/schema/bookSchema';
import { Router } from 'express';

const bookRouter = Router();

bookRouter.get('/find/popular', findPopularBooks);
bookRouter.get('/find/:googleBooksId', findSpecificBook);
bookRouter.post('/find', validateSchema(bookSchema), findBooks);

export default bookRouter;
