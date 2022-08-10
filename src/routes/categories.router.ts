import express, { Express, Request, Response } from 'express'

const router = express.Router()

router.get(
  '/:categoryId/products/:productId',
  (req: Request, res: Response) => {
    const { categoryId, productId } = req.params
    res.json({
      categoryId,
      productId,
    })
  }
)

export { router as categoriesRouter }
