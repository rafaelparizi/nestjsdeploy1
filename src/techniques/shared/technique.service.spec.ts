import { Test, TestingModule } from '@nestjs/testing';
import { TechniqueService } from './technique.service';

describe('TechniqueService', () => {
  let provider: TechniqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechniqueService],
    }).compile();

    provider = module.get<TechniqueService>(TechniqueService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
