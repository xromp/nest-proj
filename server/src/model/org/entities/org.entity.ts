import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Organization' })
export class Org {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  timezone: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  createdAt: Date;
}
