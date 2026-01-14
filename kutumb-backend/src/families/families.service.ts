import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateFamilyDto } from './dto/create-family.dto';
import { neo4jDriver } from '../common/neo4j.service';

@Injectable()
export class FamiliesService {
  async createFamily(dto: CreateFamilyDto) {
    const session = neo4jDriver.session();
    const familyId = uuidv4();

    try {
      await session.run(
        `
        CREATE (f:Family {
          familyId: $familyId,
          familyName: $familyName,
          originPlace: $originPlace,
          createdAt: datetime()
        })
        `,
        {
          familyId,
          familyName: dto.familyName,
          originPlace: dto.originPlace || null,
        },
      );

      return {
        familyId,
        familyName: dto.familyName,
      };
    } finally {
      await session.close();
    }
  }
}
