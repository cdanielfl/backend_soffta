import { Test, TestingModule } from '@nestjs/testing';
import { UnidadesHospitalaresController } from './unidades-hospitalares.controller';
import { UnidadesHospitalaresService } from './unidades-hospitalares.service';

describe('UnidadesHospitalaresController', () => {
  let controller: UnidadesHospitalaresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadesHospitalaresController],
      providers: [UnidadesHospitalaresService],
    }).compile();

    controller = module.get<UnidadesHospitalaresController>(UnidadesHospitalaresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
