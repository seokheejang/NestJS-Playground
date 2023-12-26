import { Test, TestingModule } from '@nestjs/testing';
import { SubappController } from './subapp.controller';
import { SubappService } from './subapp.service';

describe('SubappController', () => {
  let subappController: SubappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubappController],
      providers: [SubappService],
    }).compile();

    subappController = app.get<SubappController>(SubappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(subappController.getHello()).toBe('Hello World!');
    });
  });
});
