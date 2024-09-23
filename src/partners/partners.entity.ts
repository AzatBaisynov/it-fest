import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Partners {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at?: Date;

	@Column({ nullable: true })
  PartnersCompanyName: string;

	@Column({ nullable: true })
  Name: string;

	@Column({ nullable: true })
  PhoneNumber: string;

	@Column({ nullable: true })
  jbtitle: string;

	@Column({ nullable: true })
  theme2: string;
}