import { Entity, Column } from 'typeorm'

@Entity()
export class Product {
  @Column()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  image: string

  @Column()
  isBlock: boolean
}
