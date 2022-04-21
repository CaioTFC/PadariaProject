import { MigrationInterface, QueryRunner } from "typeorm";

export class baseMigrations1650506401494 implements MigrationInterface {
    name = 'baseMigrations1650506401494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" numeric(5,2) NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_b090d1e0e0721a15b3f9f0c6f0e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "itens"`);
    }

}
