import { Module } from '@nestjs/common';
import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partners } from './partners.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partners])],
  controllers: [PartnersController],
  providers: [PartnersService]
})
export class PartnersModule {}
