import { findBooks } from '@/controller/bookController';
import { validateSchema } from '@/middleware/validateSchemaMiddleware';
import { bookSchema } from '@/schema/bookSchema';
import { Router } from 'express';

const bookRouter = Router();

bookRouter.post('/find', validateSchema(bookSchema), findBooks);

export default bookRouter;
