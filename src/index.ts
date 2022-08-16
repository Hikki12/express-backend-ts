import 'reflect-metadata'
import express, { Express, Request, Response } from 'express'

import { RouterApi } from './routes'
import cors from 'cors'
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from './middlewares/error.handler'
import { config } from './config'

const app: Express = express()
const port = config.PORT

// middlewares
app.use(express.json());

const whitelist = ['http://localhost:3000', 'http://localhost:5432', "https://www.thunderclient.com"]
const options = {
  origin: (origin: string | undefined, callback: Function) => {
    origin = origin || '';
    console.log('-----> origin: ', origin);
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error(`Not allowed Host: ${origin}`))
    }
  },
}

// app.use(cors(options));

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
