import { Body, Controller, Post } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { Partners } from './partners.entity';

@Controller('partners')
export class PartnersController {
	constructor(private readonly partnersService: PartnersService) {}

	@Post()
	createPartner(@Body() partner: Partial<Partners>) {
		return this.partnersService.create(partner)
	}
}
