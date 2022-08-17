import { MigrationInterface, QueryRunner } from "typeorm";

export class updateProductTable1660756603087 implements MigrationInterface {
    name = 'updateProductTable1660756603087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "createdAt" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
    }

}
