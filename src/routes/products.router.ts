import express, { Express, Request, Response } from 'express';
import { ProductService } from '../services/product.service';


const router = express.Router();
const productService = new ProductService();


router.get('/', async (req: Request, res: Response) => {
  const products = await productService.find();
  res.json(products);
});


router.get('/filter', (req: Request, res: Response) => {
  res.send(`I'm a filter`);
});


router.get('/:id', async (req: Request, res: Response, next) => {
  try{
    const { id } = req.params;
    const product = await productService.findOne(id);
    res.json(product);
  } catch(error){
    next(error);
  }
});


router.post('/', async (req, res) => {
  const body = req.body;
  const product = await productService.create(body);
  res.status(201).json({
    message: 'created',
    data: product
  });
});


router.patch('/:id', async (req, res, next) => {
  try{
    const { id }= req.params;
    const body = req.body;
    const product = await productService.update(id, body);
    res.json(product);
  } catch(error){
    next(error);
  }
});


router.delete('/:id', (req, res) => {
  const { id }= req.params;
  const rta = productService.delete(id);
  res.json(rta);
});


export { router as productsRouter }
