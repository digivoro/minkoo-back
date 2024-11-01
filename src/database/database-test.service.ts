import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseTestService implements OnModuleInit {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  async onModuleInit() {
    try {
      const hasConnection = this.dataSource.isInitialized;

      if (hasConnection) {
        const result = await this.dataSource.query('SELECT NOW()');
        console.log('✅ Conexión a la base de datos exitosa!');
        console.log('Tiempo del servidor:', result[0].now);
      }
    } catch (error) {
      console.error(
        '❌ Error al conectar con la base de datos:',
        error.message,
      );
    }
  }
}
