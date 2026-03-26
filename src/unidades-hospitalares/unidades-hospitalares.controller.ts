import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadesHospitalaresService } from './unidades-hospitalares.service';
import { CreateUnidadesHospitalareDto } from './dto/create-unidades-hospitalare.dto';
import { UpdateUnidadesHospitalareDto } from './dto/update-unidades-hospitalare.dto';

@Controller('unidades-hospitalares')
export class UnidadesHospitalaresController {
  constructor(private readonly unidadesHospitalaresService: UnidadesHospitalaresService) {}

  @Post()
  create(@Body() createUnidadesHospitalareDto: CreateUnidadesHospitalareDto) {
    return this.unidadesHospitalaresService.create(createUnidadesHospitalareDto);
  }

  @Get()
  findAll() {
    return this.unidadesHospitalaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadesHospitalaresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnidadesHospitalareDto: UpdateUnidadesHospitalareDto) {
    return this.unidadesHospitalaresService.update(+id, updateUnidadesHospitalareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadesHospitalaresService.remove(+id);
  }
}
