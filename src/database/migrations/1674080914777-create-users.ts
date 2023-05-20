import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUsers1674080914777 implements MigrationInterface {
  name = 'createUsers1674080914777';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users"
       (
           "id"        uuid                   NOT NULL DEFAULT uuid_generate_v4(),
           "username"  character varying(255) NOT NULL,
           "email"     character varying(255) NOT NULL,
           "password"  character varying(255) NOT NULL,
           "roles"     json                   NOT NULL DEFAULT '["Customer"]',
           "is_active" boolean                NOT NULL DEFAULT true,
           CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"),
           CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
           CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
