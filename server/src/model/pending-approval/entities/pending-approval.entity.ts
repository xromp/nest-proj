import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'PendingApproval' })
export class PendingApproval {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  requestData: string;

  @Column()
  status: string;

  @Column()
  actionTakenBy: number;

  @Column()
  reason: string;

  @Column()
  createdAt: Date;
}
