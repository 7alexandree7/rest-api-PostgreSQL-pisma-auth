import { Router } from 'express';
import { addToWatchlist, removeFromWatchlist, updateWatchlist } from '../Controllers/watchlistController.js';
import { authMiddleware } from '../middleware/authmiddleware.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { addToWatchlistSchema } from '../validators/watchlistValidator.js';

const router = Router();


router.post('/', authMiddleware, validateRequest(addToWatchlistSchema), addToWatchlist)
router.delete("/:id", authMiddleware, removeFromWatchlist)
router.put("/:id", authMiddleware, updateWatchlist)

export default router;