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
import { VisitorService } from './visitor.service';
import { Visitor } from './visitor.entity';

@Controller('visitor')
export class VisitorController {
  constructor(private readonly visitorService: VisitorService) {}

  @Get()
  async findAll(): Promise<Visitor[]> {
    return await this.visitorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Visitor> {
    const visitor = await this.visitorService.findOne(id);
    if (!visitor) {
      throw new NotFoundException(`Visitor with ID ${id} not found`);
    }
    return visitor;
  }

  @Post()
  async create(@Body() visitorData: Partial<Visitor>): Promise<Visitor> {
    return await this.visitorService.create(visitorData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<Visitor>,
  ): Promise<Visitor> {
    return await this.visitorService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.visitorService.remove(id);
  }
}
