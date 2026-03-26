import { Test, TestingModule } from '@nestjs/testing';
import { UnidadesHospitalaresService } from './unidades-hospitalares.service';

describe('UnidadesHospitalaresService', () => {
  let service: UnidadesHospitalaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadesHospitalaresService],
    }).compile();

    service = module.get<UnidadesHospitalaresService>(UnidadesHospitalaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
