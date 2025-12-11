import {Router} from 'express';
import { register, login, logout } from '../Controllers/authController.js';
import { validateRequest} from '../middleware/validateRequest.js';
import { registerSchema, loginSchema} from '../validators/userValidator.js';

const router = Router();

router.post('/register', validateRequest(registerSchema), register)
router.post('/login', validateRequest(loginSchema), login )
router.post('/logout', logout)

export default router;