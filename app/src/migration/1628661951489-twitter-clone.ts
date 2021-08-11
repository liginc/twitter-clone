import {MigrationInterface, QueryRunner} from "typeorm";

export class twitterClone1628661951489 implements MigrationInterface {
    name = 'twitterClone1628661951489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `deleted_at`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `tweet` CHANGE `user_id` `user_id` int NULL");
        await queryRunner.query("ALTER TABLE `tweet` ADD CONSTRAINT `FK_d0f0cd7238f1c93d3e78f0fcdcf` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweet` DROP FOREIGN KEY `FK_d0f0cd7238f1c93d3e78f0fcdcf`");
        await queryRunner.query("ALTER TABLE `tweet` CHANGE `user_id` `user_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `deleted_at`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `deleted_at` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `created_at` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` varchar(255) NOT NULL");
    }

}
