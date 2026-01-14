import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { FamiliesService } from './families.service';
import { CreateFamilyDto } from './dto/create-family.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('families')
export class FamiliesController {
  constructor(private readonly familiesService: FamiliesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createFamily(@Body() dto: CreateFamilyDto) {
    return this.familiesService.createFamily(dto);
  }
}
