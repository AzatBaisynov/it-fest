import { Body, Controller, Post } from '@nestjs/common';
import { HackathonTeamService } from './hackathon-team.service';
import { HackatonTeam } from './hackaton-team.entity';

@Controller('hackathonTeam')
export class HackathonTeamController {
  constructor(private readonly hackatonTeamService: HackathonTeamService) {}
  @Post()
  createHackaton(@Body() hackatonTeam: Partial<HackatonTeam>) {
		return this.hackatonTeamService.create(hackatonTeam)
	}
}
