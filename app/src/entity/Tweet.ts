import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column()
  text: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: User

  @CreateDateColumn({ type: 'timestamp' })
  readonly created_at?: Date

  @Column()
  delete_flag: boolean

  @DeleteDateColumn({ type: 'timestamp' })
  readonly deleted_at?: Date

  constructor(text: string, delete_flag: boolean) {
    this.text = text
    this.delete_flag = delete_flag
  }
}