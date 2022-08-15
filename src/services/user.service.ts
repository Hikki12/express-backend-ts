import { getConnection } from '../libs/postgres'

export class UserService {
  constructor() {}

  async create() {}
  async find() {}

  async findOne(id: string | number) {
    return { id }
  }
}
