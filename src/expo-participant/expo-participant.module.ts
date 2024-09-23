import { Module } from '@nestjs/common';
import { ExpoParticipantController } from './expo-participant.controller';
import { ExpoParticipantService } from './expo-participant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpoParticipant } from './expo-participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpoParticipant])],
  controllers: [ExpoParticipantController],
  providers: [ExpoParticipantService]
})
export class ExpoParticipantModule {}
