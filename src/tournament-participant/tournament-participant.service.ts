import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TournamentParticipant } from './tournament-participant.entity';

@Injectable()
export class TournamentParticipantService {
  constructor(
    @InjectRepository(TournamentParticipant)
    private tournamentParticipantRepository: Repository<TournamentParticipant>,
  ) {}

  // Создание нового участника турнира
  async create(
    participantData: Partial<TournamentParticipant>,
  ): Promise<TournamentParticipant> {
    const newParticipant =
      this.tournamentParticipantRepository.create(participantData);
    return await this.tournamentParticipantRepository.save(newParticipant);
  }

  // Получение всех участников турнира
  async findAll(): Promise<TournamentParticipant[]> {
    return await this.tournamentParticipantRepository.find();
  }

  // Получение участника турнира по ID
  async findOne(id: string): Promise<TournamentParticipant> {
    const participant = await this.tournamentParticipantRepository.findOne({
      where: { id },
    });
    if (!participant) {
      throw new NotFoundException(`Participant with ID ${id} not found`);
    }
    return participant;
  }

  // Обновление участника турнира
  async update(
    id: string,
    updateData: Partial<TournamentParticipant>,
  ): Promise<TournamentParticipant> {
    const participant = await this.findOne(id);
    Object.assign(participant, updateData);
    return await this.tournamentParticipantRepository.save(participant);
  }

  // Удаление участника турнира
  async remove(id: string): Promise<void> {
    const participant = await this.findOne(id);
    await this.tournamentParticipantRepository.remove(participant);
  }
}
