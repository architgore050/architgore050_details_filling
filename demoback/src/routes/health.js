import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Engineered to Build API is running',
    timestamp: new Date().toISOString(),
  });
});

export default router;