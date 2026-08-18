import { Router } from 'express';
import teamController from '../controllers/team.controller.js';

const router = Router();

router.get('/', teamController.getAll);
router.get('/:id', teamController.getById);

export default router;