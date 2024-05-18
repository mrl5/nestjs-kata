import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { sql } from '../sql';

describe('HealthController', () => {
    let controller: HealthController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [HealthController],
            providers: [HealthService],
        }).compile();

        controller = app.get<HealthController>(HealthController);
    });

    afterAll(async () => {
        await sql.end();
    });

    describe('root', () => {
        it('should return "healthy" code', async () => {
            const result = await controller.getHealth();
            expect(result.code).toBe('healthy');
        });
    });
});
