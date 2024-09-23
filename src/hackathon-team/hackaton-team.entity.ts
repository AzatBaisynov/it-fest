import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class HackatonTeam {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at?: Date;

	@Column({ nullable: true })
  hackathonTeamName: string;

	@Column({ nullable: true })
  Country: string;

	@Column({ nullable: true })
  City: string;

	@Column({ nullable: true })
  Theme: string;

	@Column({ nullable: true })
  hackathonTeammates: string;

}	