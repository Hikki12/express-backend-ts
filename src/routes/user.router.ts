import express, { Express, Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset,
    })
  } else {
    res.send('There is not parameters')
  }
})

export { router as usersRouter }
