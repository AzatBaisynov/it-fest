import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitor } from './visitor.entity';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(Visitor)
    private visitorRepository: Repository<Visitor>,
  ) {}

  // Создание нового посетителя
  async create(visitorData: Partial<Visitor>): Promise<Visitor> {
    const newVisitor = this.visitorRepository.create(visitorData);
    return await this.visitorRepository.save(newVisitor);
  }

  // Получение всех посетителей
  async findAll(): Promise<Visitor[]> {
    return await this.visitorRepository.find();
  }

  // Получение посетителя по ID
  async findOne(id: string): Promise<Visitor> {
    const visitor = await this.visitorRepository.findOne({ where: { id } });
    if (!visitor) {
      throw new NotFoundException(`Visitor with ID ${id} not found`);
    }
    return visitor;
  }

  // Обновление данных посетителя
  async update(id: string, updateData: Partial<Visitor>): Promise<Visitor> {
    const visitor = await this.findOne(id);
    Object.assign(visitor, updateData);
    return await this.visitorRepository.save(visitor);
  }

  // Удаление посетителя
  async remove(id: string): Promise<void> {
    const visitor = await this.findOne(id);
    await this.visitorRepository.remove(visitor);
  }
}
