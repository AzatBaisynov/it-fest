import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Visitor {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at?: Date;

  @Column({ nullable: true })
  Name: string;

  @Column({ nullable: true })
  City: string;

  @Column({ nullable: true })
  Age: Date;

  @Column({ nullable: true })
  PhoneNumber: string;

  @Column({ nullable: true })
  Theme: string;

}
