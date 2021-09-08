import {MigrationInterface, QueryRunner} from "typeorm";

export class twitterClone1629878158092 implements MigrationInterface {
    name = 'twitterClone1629878158092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `delete_flag`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `delete_flag` bit NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `delete_flag`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `delete_flag` tinyint NOT NULL");
    }

}
