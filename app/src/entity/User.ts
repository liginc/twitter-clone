import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  display_name: string

  @Column()
  email: string

  @Column()
  created_at: string

  @Column()
  updated_at: string

  constructor(id: number, name: string, display_name: string, email: string, created_at: string, updated_at: string) {
    this.id = id
    this.name = name
    this.display_name = display_name
    this.email = email
    this.created_at = created_at
    this.updated_at = updated_at
  }
}