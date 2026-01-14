import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFamilyDto {
  @IsString()
  @IsNotEmpty()
  familyName: string;

  @IsString()
  @IsOptional()
  originPlace?: string;
}
