import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TournamentParticipant {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at?: Date;

  @Column({ nullable: true })
  Name: string;

  @Column({ nullable: true })
  Surname: string;

  @Column({ nullable: true })
  FatherName: string;

  @Column({ nullable: true })
  Email: string;

  @Column({ nullable: true })
  Country: string;

  @Column({ nullable: true })
  City: string;

  @Column({ nullable: true })
  PhoneNumber: string;

  @Column({ nullable: true })
  DateOfBirth: Date;

  @Column({ nullable: true })
  course: string;

  @Column({ nullable: true })
  theme: string;

}
