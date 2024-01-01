import { Test, TestingModule } from '@nestjs/testing';
import { SystemCollectorController } from './system-collector.controller';
import { SystemCollectorService } from './system-collector.service';

describe('SystemCollectorController', () => {
  let systemCollectorController: SystemCollectorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SystemCollectorController],
      providers: [SystemCollectorService],
    }).compile();

    systemCollectorController = app.get<SystemCollectorController>(SystemCollectorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(systemCollectorController.getHello()).toBe('Hello World!');
    });
  });
});
