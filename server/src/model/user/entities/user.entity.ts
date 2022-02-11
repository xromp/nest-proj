import { AfterLoad, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  middlename: string;

  @Column()
  email: string;

  @Column()
  organizationId: number;

  @Column()
  createdAt: Date;
}
