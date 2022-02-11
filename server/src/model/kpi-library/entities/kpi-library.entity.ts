import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'KPILibrary' })
export class KPILibrary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;
}
