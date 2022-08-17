import { MigrationInterface, QueryRunner } from "typeorm";

export class updateProductTable1660756688981 implements MigrationInterface {
    name = 'updateProductTable1660756688981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "createdAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
    }

}
