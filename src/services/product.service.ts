import { faker } from '@faker-js/faker'
import boom from '@hapi/boom'
import { AppDataSource } from '../data-source'
import { Product } from '../entity/product.entity'


const productRepository = AppDataSource.getRepository(Product);


export class ProductService {
  products: Product[] = []

  constructor() {
  }

  async create(product: Product) {
    return await productRepository.create(product)
  }

  async find() {
    return await productRepository.find();
  }

  async findOne(id: string) {
    const product = await productRepository.findOneBy({ id })
    if (!product) {
      throw boom.notFound('Product not found')
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block')
    }
    return product
  }

  async update(id: string, changes: Product) {
    const product = await this.findOne(id);
    return await productRepository.update(product.id, changes);
  }

  async delete(id: string) {
    return await productRepository.delete({ id })
  }
}
