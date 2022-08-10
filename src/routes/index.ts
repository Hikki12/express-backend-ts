import express, { Express } from 'express'
import { categoriesRouter } from './categories.router'
import { productsRouter } from './products.router'
import { usersRouter } from './user.router'

const router = express.Router()

function RouterApi(app: Express) {
  // V1
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
}

export { RouterApi }
