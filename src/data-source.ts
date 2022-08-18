import { DataSource } from "typeorm"
import  { config } from "./config";
import { Product } from "./entity/product.entity";
import { User } from "./entity/user.entity";
import { Customer } from "./entity/customer.entity"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
      Product,
      User,
      Customer
    ],
    subscribers: [],
    migrations: []
});


AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));
