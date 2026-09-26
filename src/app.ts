import express, { type Express, type Request, type Response } from 'express';
import { calculatePortfolioPerformance } from './portfolio/portfolioPerformance';

export const app: Express = express();

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

app.get('/api/v1/portfolio/performance', (req, res) =>{
  let initialInvestment = Number(req.query.initialInvestment)
  let currentValue = Number(req.query.currentValue)

  const calculatedResult = calculatePortfolioPerformance(initialInvestment, currentValue)
  res.json(calculatedResult)
})


export default app;