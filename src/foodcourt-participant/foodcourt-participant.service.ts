import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodcourtParticipant } from './foodcourt-participant.entity';

@Injectable()
export class FoodcourtParticipantService {
  constructor(
    @InjectRepository(FoodcourtParticipant)
    private foodcourtParticipantRepository: Repository<FoodcourtParticipant>,
  ) {}

  // Создание нового участника фудкорта
  async create(
    participantData: Partial<FoodcourtParticipant>,
  ): Promise<FoodcourtParticipant> {
    const newParticipant =
      this.foodcourtParticipantRepository.create(participantData);
    return await this.foodcourtParticipantRepository.save(newParticipant);
  }

  // Получение всех участников фудкорта
  async findAll(): Promise<FoodcourtParticipant[]> {
    return await this.foodcourtParticipantRepository.find();
  }

  // Получение участника фудкорта по ID
  async findOne(id: string): Promise<FoodcourtParticipant> {
    const participant = await this.foodcourtParticipantRepository.findOne({
      where: { id },
    });
    if (!participant) {
      throw new NotFoundException(`Participant with ID ${id} not found`);
    }
    return participant;
  }

  // Обновление участника фудкорта
  async update(
    id: string,
    updateData: Partial<FoodcourtParticipant>,
  ): Promise<FoodcourtParticipant> {
    const participant = await this.findOne(id);
    Object.assign(participant, updateData);
    return await this.foodcourtParticipantRepository.save(participant);
  }

  // Удаление участника фудкорта
  async remove(id: string): Promise<void> {
    const participant = await this.findOne(id);
    await this.foodcourtParticipantRepository.remove(participant);
  }
}
