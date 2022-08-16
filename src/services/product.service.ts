import { faker } from '@faker-js/faker'
import boom from '@hapi/boom'
import { AppDataSource } from '../data-source'
import { Product } from '../entity/product.entity'


const productRepository = AppDataSource.getRepository(Product);


export class ProductService {
  products: Product[] = []

  constructor() {
  }

  create({ name, price, image }: Product) {
    const product = {
      id: faker.datatype.number(),
      name,
      price,
      image,
      isBlock: false,
    }
    // this.products.push(product)
    return product
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
      throw boom.notFound('Product not found')
  }

  async delete(id: string) {
    const index = this.products.findIndex(item => item.id == id)
    if (index === -1) {
      throw boom.notFound('Product not found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}
