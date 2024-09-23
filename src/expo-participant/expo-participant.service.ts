import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpoParticipant } from './expo-participant.entity';

@Injectable()
export class ExpoParticipantService {
  constructor(
    @InjectRepository(ExpoParticipant)
    private expoParticipantRepository: Repository<ExpoParticipant>,
  ) {}

  // Создание нового участника
  async create(
    participantData: Partial<ExpoParticipant>,
  ): Promise<ExpoParticipant> {
    const newParticipant =
      this.expoParticipantRepository.create(participantData);
    return await this.expoParticipantRepository.save(newParticipant);
  }

  // Получение всех участников
  async findAll(): Promise<ExpoParticipant[]> {
    return await this.expoParticipantRepository.find();
  }

  // Получение участника по ID
  async findOne(id: string): Promise<ExpoParticipant> {
    const participant = await this.expoParticipantRepository.findOne({
      where: { id },
    });
    if (!participant) {
      throw new NotFoundException(`Participant with ID ${id} not found`);
    }
    return participant;
  }

  // Обновление участника
  async update(
    id: string,
    updateData: Partial<ExpoParticipant>,
  ): Promise<ExpoParticipant> {
    const participant = await this.findOne(id);
    Object.assign(participant, updateData);
    return await this.expoParticipantRepository.save(participant);
  }

  // Удаление участника
  async remove(id: string): Promise<void> {
    const participant = await this.findOne(id);
    await this.expoParticipantRepository.remove(participant);
  }
}
