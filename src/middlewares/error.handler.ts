import { Boom } from '@hapi/boom'
import { Request, Response } from 'express'

/** Tracks errors globally */
export function logErrors(
  err: Error,
  req: Request,
  res: Response,
  next: (arg0: Error) => void
) {
  console.log('--> logErrors')
  console.error(err)
  next(err)
}

/** Formats normal errors */
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: (arg0: Error) => void
) {
  console.log('--> errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

/** Handles boom errors */
export function boomErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: (arg0: Error) => void
) {
  console.log('--> boomErrorHandler')
  if (err instanceof Boom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err);
}
