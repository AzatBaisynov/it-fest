import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Partners } from './partners.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartnersService {
	constructor(
		@InjectRepository(Partners)
		private partnersRepository: Repository<Partners>
	) {}

	async create(partner: Partial<Partners>) {
		const createdPartner = this.partnersRepository.create(partner)
		return this.partnersRepository.save(createdPartner)
	}
}
