import { Module } from '@nestjs/common';
import { HackathonTeamController } from './hackathon-team.controller';
import { HackathonTeamService } from './hackathon-team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HackatonTeam } from './hackaton-team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HackatonTeam])],
  controllers: [HackathonTeamController],
  providers: [HackathonTeamService]
})
export class HackathonTeamModule {}
