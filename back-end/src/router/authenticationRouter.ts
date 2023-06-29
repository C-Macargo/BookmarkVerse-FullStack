import { loginUser, registerUser } from '@/controller/authenticationController';
import { validateSchema } from '@/middleware/validateSchemaMiddleware';
import { loginSchema, registerSchema } from '@/schema/authenticationSchema';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/register', validateSchema(registerSchema), registerUser);
authRouter.post('/login', validateSchema(loginSchema), loginUser);

export default authRouter;
