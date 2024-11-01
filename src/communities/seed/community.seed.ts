import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Community } from '../entities/community.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommunitySeedService {
  constructor(
    @InjectRepository(Community)
    private readonly communityRepository: Repository<Community>,
  ) {}

  async seed() {
    await this.communityRepository.clear();

    const communities = [
      {
        name: 'Comunidad de Desarrolladores',
        description: 'Un espacio para compartir conocimientos de programación',
      },
      {
        name: 'Comunidad de Diseñadores',
        description: 'Para amantes del diseño y la creatividad',
      },
      {
        name: 'Comunidad de DevOps',
        description: 'Especialistas en infraestructura y deployment',
      },
    ];

    for (const community of communities) {
      const newCommunity = this.communityRepository.create(community);
      await this.communityRepository.save(newCommunity);
    }

    console.log('Communidades: Datos de prueba insertados correctamente');
  }
}
