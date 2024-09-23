import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { FoodcourtParticipantService } from './foodcourt-participant.service';
import { FoodcourtParticipant } from './foodcourt-participant.entity';

@Controller('foodcourt-participant')
export class FoodcourtParticipantController {
  constructor(
    private readonly foodcourtParticipantService: FoodcourtParticipantService,
  ) {}

  @Get()
  async findAll(): Promise<FoodcourtParticipant[]> {
    return await this.foodcourtParticipantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FoodcourtParticipant> {
    const participant = await this.foodcourtParticipantService.findOne(id);
    if (!participant) {
      throw new NotFoundException(`Participant with ID ${id} not found`);
    }
    return participant;
  }

  @Post()
  async create(
    @Body() participantData: Partial<FoodcourtParticipant>,
  ): Promise<FoodcourtParticipant> {
    return await this.foodcourtParticipantService.create(participantData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<FoodcourtParticipant>,
  ): Promise<FoodcourtParticipant> {
    return await this.foodcourtParticipantService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.foodcourtParticipantService.remove(id);
  }
}
