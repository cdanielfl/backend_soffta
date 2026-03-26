import { PartialType } from '@nestjs/mapped-types';
import { CreateUnidadesHospitalareDto } from './create-unidades-hospitalare.dto';

export class UpdateUnidadesHospitalareDto extends PartialType(CreateUnidadesHospitalareDto) {}
