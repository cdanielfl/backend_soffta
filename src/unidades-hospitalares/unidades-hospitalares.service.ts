import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnidadesHospitalare } from './entities/unidades-hospitalare.entity';
import { CreateUnidadesHospitalareDto } from './dto/create-unidades-hospitalare.dto';
import { UpdateUnidadesHospitalareDto } from './dto/update-unidades-hospitalare.dto';

@Injectable()
export class UnidadesHospitalaresService {

  constructor(
    @InjectRepository(UnidadesHospitalare)
    private readonly unidadesHospitalaresRepository: Repository<UnidadesHospitalare>,
  ) { }

  async create(createUnidadesHospitalareDto: CreateUnidadesHospitalareDto) {
    return this.unidadesHospitalaresRepository.save(createUnidadesHospitalareDto);
  }

  async findAll() {
    return this.unidadesHospitalaresRepository.find();
  }

  async findOne(id: number) {
    return this.unidadesHospitalaresRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUnidadesHospitalareDto: UpdateUnidadesHospitalareDto) {
    return this.unidadesHospitalaresRepository.update(id, updateUnidadesHospitalareDto);
  }

  async remove(id: number) {
    return this.unidadesHospitalaresRepository.delete(id);
  }
}
