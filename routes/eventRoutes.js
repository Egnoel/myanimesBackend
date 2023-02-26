import { Router } from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  allEvents,
  createEvent,
  filterEvents,
} from '../controllers/eventController.js';

const router = Router();

router.route('/').get(protect, allEvents);

router.route('/filter').get(protect, filterEvents);
router.route('/create').post(protect, createEvent);

export default router;
