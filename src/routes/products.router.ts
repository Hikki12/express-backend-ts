import express, { Express, Request, Response } from 'express'
import { ProductService } from '../services/product.service'
import { validatorHandler } from '../middlewares/validator.handler'
import {
  getProductSchema,
  updateProductSchema,
  createProductSchema,
} from '../schemas/product.schema'

const router = express.Router()
const productService = new ProductService()

router.get('/', async (req: Request, res: Response, next) => {
  try{
    const products = await productService.find()
    res.json(products)
  }catch(error){
    next(error);
  }
})

router.get('/filter', (req: Request, res: Response) => {
  res.send(`I'm a filter`)
})

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req: Request, res: Response, next) => {
    try {
      const { id } = req.params;
      const product = await productService.findOne(id)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req: Request, res: Response, next) => {
    try {
      const body = req.body
      const product = await productService.create(body)
      res.status(201).json({
        message: 'created',
        data: product,
      })
    }catch (error) {
      next(error);
    }
  }
)

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req: Request, res: Response, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const product = await productService.update(id, body)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', (req: Request, res: Response, next) => {
  try {
    const { id } = req.params
    const rta = productService.delete(id)
    res.json(rta)
  }catch (error) {
    next(error);
  }
})

export { router as productsRouter }
