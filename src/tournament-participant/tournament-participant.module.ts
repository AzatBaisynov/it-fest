import { Module } from '@nestjs/common';
import { TournamentParticipantController } from './tournament-participant.controller';
import { TournamentParticipantService } from './tournament-participant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentParticipant } from './tournament-participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TournamentParticipant])],
  controllers: [TournamentParticipantController],
  providers: [TournamentParticipantService],
})
export class TournamentParticipantModule {}
