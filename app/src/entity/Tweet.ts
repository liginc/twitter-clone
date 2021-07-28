import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  @Column()
  user_id: number

  @Column()
  created_at: string

  @Column()
  delete_flag: boolean

  @Column()
  deleted_at: string

  constructor(id: number, text: string, user_id: number, created_at: string, delete_flag: boolean, deleted_at: string) {
    this.id = id
    this.text = text
    this.user_id = user_id
    this.created_at = created_at
    this.delete_flag = delete_flag
    this.deleted_at = deleted_at
  }
}