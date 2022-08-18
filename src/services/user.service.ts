import boom from '@hapi/boom'
import { AppDataSource } from "../data-source";
import { User } from "../entity/user.entity";

const userRepository = AppDataSource.getRepository(User);

export class UserService {
  constructor() { }

  async create(user: User) {
    return await userRepository.create(user);
  }

  async find() {
    return await userRepository.find();
  }

  async findOne(id: number) {
    const user = await userRepository.findOneBy({ id });
    if(!user){
      throw boom.notFound('User not found')
    }
    return user
  }

  async update(id: number, changes: User){
    const user = await this.findOne(id);
    return await userRepository.update(user.id, changes);
  }

  async delete(id: number){
    return await userRepository.delete({ id });
  }
}
