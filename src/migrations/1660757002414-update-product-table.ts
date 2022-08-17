import { MigrationInterface, QueryRunner } from "typeorm";

export class updateProductTable1660757002414 implements MigrationInterface {
    name = 'updateProductTable1660757002414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "created_at"`);
    }

}
