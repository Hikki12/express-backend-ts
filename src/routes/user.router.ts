import express, { Express, Request, Response } from 'express'
import { UserService } from '../services/user.service';
import { validatorHandler } from '../middlewares/validator.handler'

import {
  getUserSchema,
  updateUserSchema,
  createUserSchema,
} from '../schemas/user.schema'

const router = express.Router()
const userService = new UserService();


router.get('/', async (req: Request, res: Response, next) => {
  try{
    const users = await userService.find();
    res.json(users);
  }catch(error){
    next(error)
  }
})


router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userService.findOne(Number(id));
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await userService.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);


router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await userService.update(Number(id), body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await userService.delete(Number(id));
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);


export { router as usersRouter }
