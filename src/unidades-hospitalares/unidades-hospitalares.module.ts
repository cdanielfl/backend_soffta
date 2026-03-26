import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadesHospitalaresService } from './unidades-hospitalares.service';
import { UnidadesHospitalaresController } from './unidades-hospitalares.controller';
import { UnidadesHospitalare } from './entities/unidades-hospitalare.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnidadesHospitalare])],
  controllers: [UnidadesHospitalaresController],
  providers: [UnidadesHospitalaresService],
})
export class UnidadesHospitalaresModule {}
