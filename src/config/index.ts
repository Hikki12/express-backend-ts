import dotenv from 'dotenv'
dotenv.config()

export const config = {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: Number(process.env.DB_PORT),
  DB_USER: process.env.DB_USER || 'jason',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || '',
}
