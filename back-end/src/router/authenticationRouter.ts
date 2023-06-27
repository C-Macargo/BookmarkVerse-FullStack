import { registerUser } from '@/controller/authenticationController';
import { validateSchema } from '@/middleware/validateSchemaMiddleware';
import authenticationSchema from '@/schema/authenticationSchema';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/register', validateSchema(authenticationSchema.registerSchema), registerUser);

export default authRouter;
