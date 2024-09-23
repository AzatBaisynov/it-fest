import { Module } from '@nestjs/common';
import { TournamentParticipantModule } from './tournament-participant/tournament-participant.module';
import { ExpoParticipantModule } from './expo-participant/expo-participant.module';
import { FoodcourtParticipantModule } from './foodcourt-participant/foodcourt-participant.module';
import { VisitorModule } from './visitor/visitor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PartnersModule } from './partners/partners.module';
import { HackathonTeamModule } from './hackathon-team/hackathon-team.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        getTypeOrmConfig(configService),
      inject: [ConfigService],
    }),
    TournamentParticipantModule,
    ExpoParticipantModule,
    FoodcourtParticipantModule,
    VisitorModule,
    PartnersModule,
    HackathonTeamModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
