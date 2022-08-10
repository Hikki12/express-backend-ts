import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv';
import { RouterApi } from './routes';
import { boomErrorHandler, errorHandler, logErrors } from './middlewares/error.handler';


dotenv.config()

const app: Express = express()
const port = process.env.PORT;


// middlewares
app.use(express.json());

// Routes config
RouterApi(app);

// middlewares for errors should be used after routing
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
});
