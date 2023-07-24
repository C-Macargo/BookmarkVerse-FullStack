import { findBooks, findSpecificBook } from '@/controller/bookController';
import { validateSchema } from '@/middleware/validateSchemaMiddleware';
import { bookSchema } from '@/schema/bookSchema';
import { Router } from 'express';

const bookRouter = Router();

bookRouter.post('/find', validateSchema(bookSchema), findBooks);
bookRouter.get('/find/:googleBooksId', findSpecificBook);

export default bookRouter;
