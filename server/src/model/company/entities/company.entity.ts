import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Company' })
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  addressId: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
