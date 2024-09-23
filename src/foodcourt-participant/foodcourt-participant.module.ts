import { Module } from '@nestjs/common';
import { FoodcourtParticipantController } from './foodcourt-participant.controller';
import { FoodcourtParticipantService } from './foodcourt-participant.service';
import { FoodcourtParticipant } from './foodcourt-participant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FoodcourtParticipant])],
  controllers: [FoodcourtParticipantController],
  providers: [FoodcourtParticipantService],
})
export class FoodcourtParticipantModule {}
