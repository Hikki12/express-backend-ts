import { faker } from '@faker-js/faker'
import { throws } from 'assert'
import boom from '@hapi/boom'
import { pool } from '../libs/postgres.pool'
import { Pool } from 'pg'
import { AppDataSource } from '../data-source'
import { Product } from '../entity/product'


const productRepository = AppDataSource.getRepository(Product)


export class ProductService {
  products: Product[] = []
  pool: Pool

  constructor() {
    this.generate()
    this.pool = pool
    this.pool.on('error', err => console.error(err))
  }

  generate() {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  create({ name, price, image }: Product) {
    const product = {
      id: faker.datatype.uuid(),
      name,
      price,
      image,
    }
    this.products.push(product)
    return product
  }

  async find() {
    const query = 'SELECT * FROM products'
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    // const products = await productRepository.find()
    // return this.products
  }

  async findOne(id: string | number) {
    const product = this.products.find(item => item.id == id)
    if (!product) {
      throw boom.notFound('Product not found')
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block')
    }
    return product
  }

  async update(id: string | number, changes: Product) {
    const index = this.products.findIndex(item => item.id == id)
    if (index === -1) {
      throw boom.notFound('Product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes,
    }
  }

  async delete(id: string | number) {
    const index = this.products.findIndex(item => item.id == id)
    if (index === -1) {
      throw boom.notFound('Product not found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}
