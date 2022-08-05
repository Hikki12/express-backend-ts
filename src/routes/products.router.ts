import express, { Express, Request, Response } from 'express';
import { faker } from '@faker-js/faker';
const router = express.Router();


router.get('/', (req: Request, res: Response) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for(let i = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
    res.json(products);
  }
});


router.get('/filter', (req: Request, res: Response) => {
  res.send(`I'm a filter`);
});


router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product x',
    price: 1000
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});



export { router as productsRouter }
