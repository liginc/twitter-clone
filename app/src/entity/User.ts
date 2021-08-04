import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column()
  name: string

  @Column()
  display_name: string

  @Column()
  email: string

  @CreateDateColumn({ type: 'timestamp' })
  readonly created_at?: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  readonly updated_at?: Date

  constructor(name: string, display_name: string, email: string) {
    this.name = name
    this.display_name = display_name
    this.email = email
  }
}