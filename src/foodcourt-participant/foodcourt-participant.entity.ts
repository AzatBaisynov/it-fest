import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class FoodcourtParticipant {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at?: Date;

  @Column({ nullable: true })
  Brand_name: string;

  @Column({ nullable: true })
  Job_Title: string;

  @Column({ nullable: true })
  Company_Activity: string;

  @Column({ nullable: true })
  Email: string;

  @Column({ nullable: true })
  Country: string;

  @Column({ nullable: true })
  Phone_number: string;

  @Column({ nullable: true })
  Company_Product: string;

}
