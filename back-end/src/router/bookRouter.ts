import { findBooks } from '@/controller/bookController';
import { Router } from 'express';

const bookRouter = Router();

bookRouter.post('/find', findBooks);

export default bookRouter;
