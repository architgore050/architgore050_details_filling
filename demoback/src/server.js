import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import healthRoutes from './routes/health.js';
import teamRoutes from './routes/team.js';
import requestLogger from './middleware/logger.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(
  cors({
    origin: config.frontendUrl,
  })
);
app.use(express.json());
app.use(requestLogger);

app.use('/api/health', healthRoutes);
app.use('/api/team', teamRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log('=============================================');
  console.log('  Engineered to Build API');
  console.log(`  Running on http://localhost:${config.port}`);
  console.log(`  Health: http://localhost:${config.port}/api/health`);
  console.log('=============================================');
});

export default app;