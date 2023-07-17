import { Router } from 'express';
import authRouter from './authenticationRouter';
import bookRouter from './bookRouter';

const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/book', bookRouter);
export default appRouter;
