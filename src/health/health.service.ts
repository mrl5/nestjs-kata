import { Injectable } from '@nestjs/common';
import { HealthCode, HealthStatus } from './entities/health.entity';

@Injectable()
export class HealthService {
    getHealth(): HealthStatus {
        return { code: HealthCode.Healthy };
    }
}
