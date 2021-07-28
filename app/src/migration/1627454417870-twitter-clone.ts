import {MigrationInterface, QueryRunner} from "typeorm";

export class twitterClone1627454417870 implements MigrationInterface {
    name = 'twitterClone1627454417870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tweet` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `user_id` int NOT NULL, `created_at` varchar(255) NOT NULL, `delete_flag` tinyint NOT NULL, `deleted_at` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `display_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `created_at` varchar(255) NOT NULL, `updated_at` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `tweet`");
    }

}
