import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
   migrationsTableName: 'migrations',
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'postgres',
   password: 'postgres',
   database: 'padariaProject',
   logging: false,
   synchronize: false,
   name: 'default',
   entities: ['src/entities/**.entity{.ts,.js}'],
   migrations: ['src/database/migrations/*{.ts,.js}'],
   subscribers: ['src/subscriber/**/*{.ts,.js}'],
});