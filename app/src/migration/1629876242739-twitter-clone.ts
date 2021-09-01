import {MigrationInterface, QueryRunner} from "typeorm";

export class twitterClone1629876242739 implements MigrationInterface {
    name = 'twitterClone1629876242739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `display_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tweet` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `delete_flag` tinyint NOT NULL, `deleted_at` timestamp(6) NULL, `user_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `tweet` ADD CONSTRAINT `FK_d0f0cd7238f1c93d3e78f0fcdcf` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweet` DROP FOREIGN KEY `FK_d0f0cd7238f1c93d3e78f0fcdcf`");
        await queryRunner.query("DROP TABLE `tweet`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
