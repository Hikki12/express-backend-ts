import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { RouterApi } from './routes'
import cors from 'cors';
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from './middlewares/error.handler'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

// middlewares
app.use(express.json())
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin: string | undefined, callback: Function) => {
    origin = origin || "";
    if(whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('Not allowed'));
    }

  }
}
app.use(cors(options));

// Routes config
RouterApi(app)

// middlewares for errors should be used after routing
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
