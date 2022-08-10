import { Request, Response } from 'express'
import boom from '@hapi/boom'
import Joi from 'joi'

/** Joi validator middleware */
export function validatorHandler(schema: Joi.Schema, property: string) {
  return (req: Request, res: Response, next: (arg0?: Error) => void) => {
    const data = (<any>req)[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if (error) {
      next(boom.badRequest(error.message))
    }
    next()
  }
}
