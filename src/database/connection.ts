import { DataSource } from "typeorm"
import Item from "../models/item.entity"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "padariaProject",
    synchronize: true,
    logging: true,
    entities: [Item],
    subscribers: [],
    migrations: [],
})

// load entities, establish db connection, sync schema, etc.
export default dataSource.initialize()