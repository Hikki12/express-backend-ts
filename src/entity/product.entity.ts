import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

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
