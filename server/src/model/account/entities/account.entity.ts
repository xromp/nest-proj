import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Account' })
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  userId: number;

  @Column()
  active: boolean;

  @Column()
  createdAt: Date;
}
