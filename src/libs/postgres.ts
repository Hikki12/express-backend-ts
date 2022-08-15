import { config } from '../config'
import { Client } from 'pg'

export const getConnection = async () => {
  const client = new Client({
    host: config.DB_HOST,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  })
  await client.connect()
  return client
}
