import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ItemsCreateTable1591461056507 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "items",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "image",
                    type: "varchar",
                }
            ]
        }), true)
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("items");
    }
}
