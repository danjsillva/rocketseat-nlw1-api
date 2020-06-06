import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PointsCreateTable1591461020009 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "points",
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
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "whatsapp",
                    type: "varchar",
                },
                {
                    name: "uf",
                    type: "varchar",
                },
                {
                    name: "city",
                    type: "varchar",
                },
                {
                    name: "lat",
                    type: "varchar",
                },
                {
                    name: "lon",
                    type: "varchar",
                },
                {
                    name: "items_ids",
                    type: "varchar",
                },
            ]
        }), true)
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("points");
    }
}
