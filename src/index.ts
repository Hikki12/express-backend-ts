import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv';
import { RouterApi } from './routes';


dotenv.config()

const app: Express = express()
const port = process.env.PORT;


// middlewares
app.use(express.json());

// Routes config
RouterApi(app);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
});
