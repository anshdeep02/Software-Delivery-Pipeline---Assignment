import express from 'express';

const router = express.Router();

// Basic health check endpoint
router.get('/health', (req, res) => {
  res.status(200).send({ message: 'Server is up and running' });
});

export default router;
