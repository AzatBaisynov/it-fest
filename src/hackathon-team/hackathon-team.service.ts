import { Injectable, NotFoundException } from '@nestjs/common';
import { HackatonTeam } from './hackaton-team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HackathonTeamService {
  constructor(
    @InjectRepository(HackatonTeam)
    private hackathonTeamRepository: Repository<HackatonTeam>,
  ) {}

  // Создание новой команды
  async create(teamData: Partial<HackatonTeam>): Promise<HackatonTeam> {
    const newTeam = await this.hackathonTeamRepository.create(teamData);
    return await this.hackathonTeamRepository.save(newTeam);
  }

  // Получение всех команд
  async findAll(): Promise<HackatonTeam[]> {
    return await this.hackathonTeamRepository.find();
  }

  // Получение команды по ID
  async findOne(id: string): Promise<HackatonTeam> {
    const team = await this.hackathonTeamRepository.findOne({ where: { id } });
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
    return team;
  }

  // Обновление команды
  async update(
    id: string,
    updateData: Partial<HackatonTeam>,
  ): Promise<HackatonTeam> {
    const team = await this.findOne(id);
    Object.assign(team, updateData);
    return await this.hackathonTeamRepository.save(team);
  }

  // Удаление команды
  async remove(id: string): Promise<void> {
    const team = await this.findOne(id);
    await this.hackathonTeamRepository.remove(team);
  }
}
