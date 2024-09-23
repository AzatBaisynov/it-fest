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
import { TournamentParticipantService } from './tournament-participant.service';
import { TournamentParticipant } from './tournament-participant.entity';

@Controller('tournament-participant')
export class TournamentParticipantController {
  constructor(
    private readonly tournamentParticipantService: TournamentParticipantService,
  ) {}

  @Get()
  async findAll(): Promise<TournamentParticipant[]> {
    return await this.tournamentParticipantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TournamentParticipant> {
    const participant = await this.tournamentParticipantService.findOne(id);
    if (!participant) {
      throw new NotFoundException(`Participant with ID ${id} not found`);
    }
    return participant;
  }

  @Post()
  async create(
    @Body() participantData: Partial<TournamentParticipant>,
  ): Promise<TournamentParticipant> {
    return await this.tournamentParticipantService.create(participantData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<TournamentParticipant>,
  ): Promise<TournamentParticipant> {
    return await this.tournamentParticipantService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.tournamentParticipantService.remove(id);
  }
}
