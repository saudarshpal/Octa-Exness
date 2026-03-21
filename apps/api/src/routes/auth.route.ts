import { Router } from 'express';
import { Signin, Signup } from '../controllers/auth.controller';

const router = Router();

router.post('/signup',Signup);
router.post('/signin',Signin);

export default router
