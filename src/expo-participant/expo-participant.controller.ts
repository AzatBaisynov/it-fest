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
import { ExpoParticipantService } from './expo-participant.service';
import { ExpoParticipant } from './expo-participant.entity';

@Controller('expo-participant')
export class ExpoParticipantController {
  constructor(
    private readonly expoParticipantService: ExpoParticipantService,
  ) {}

  // Получение всех участников
  @Get()
  async findAll(): Promise<ExpoParticipant[]> {
    return await this.expoParticipantService.findAll();
  }

  // Получение участника по ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ExpoParticipant> {
    const participant = await this.expoParticipantService.findOne(id);
    if (!participant) {
      throw new NotFoundException(`Participant with ID ${id} not found`);
    }
    return participant;
  }

  // Создание нового участника
  @Post()
  async create(
    @Body() participantData: Partial<ExpoParticipant>,
  ): Promise<ExpoParticipant> {
    return await this.expoParticipantService.create(participantData);
  }

  // Обновление участника
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<ExpoParticipant>,
  ): Promise<ExpoParticipant> {
    return await this.expoParticipantService.update(id, updateData);
  }

  // Удаление участника
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.expoParticipantService.remove(id);
  }
}
