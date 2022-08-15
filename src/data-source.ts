import { DataSource } from 'typeorm/data-source'
import { config } from './config'
import { Product } from './entity/product'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Product],
  subscribers: [],
  migrations: [],
})
