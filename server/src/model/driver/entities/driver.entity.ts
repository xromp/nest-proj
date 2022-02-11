import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Driver' })
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  abbreviation: string;

  @Column()
  kpiIndicator: string;

  @Column()
  uom: string;

  @Column()
  customUOM: string;

  @Column()
  period: string;

  @Column()
  aggregation: string;

  @Column()
  decimal: string;

  @Column()
  targetType: string;

  @Column()
  libraryId: string;

  @Column()
  createdAt: Date;
}
