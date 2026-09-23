import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/v1/health', (req, res) => {

  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  })
})


export default app;