import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadesHospitalaresModule } from './unidades-hospitalares/unidades-hospitalares.module';

@Module({
  imports: [
    // 1. Configuração do ambiente
    ConfigModule.forRoot(),

    // 2. Conexão com o banco de dados
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),

    // 3. Seus módulos (Note que ele é apenas um item na lista abaixo)
    UnidadesHospitalaresModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
