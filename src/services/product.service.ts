import { faker } from '@faker-js/faker';
import { throws } from 'assert';

export class ProductService {
  products: Product[] = [];

  constructor(){
    this.generate();
  }

  generate() {
    const limit = 100;
    for(let i = 0; i < limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create({ name, price, image }: Product) {
    const product = {
      id: faker.datatype.uuid(),
      name,
      price,
      image
    }
    this.products.push(product);
    return product;
  }

  async find(){
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    return this.products;
  }

  async findOne(id: string | number) {
    return this.products.find(item => item.id == id);
  }

  async update(id: string | number, changes: Product) {
    const index = this.products.findIndex(item => item.id == id);
    if(index === -1){
      throw new Error(`Product not found`);
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
  }

  async delete(id: string | number) {
    const index = this.products.findIndex(item => item.id == id);
    if(index === -1){
      throw new Error(`Product not found`);
    }
    this.products.splice(index, 1);
    return { id };
  }
}
