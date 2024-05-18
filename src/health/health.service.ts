import { Injectable, Logger } from '@nestjs/common';
import { HealthCode, HealthStatus } from './entities/health.entity';
import { sql } from '../sql';

@Injectable()
export class HealthService {
    private readonly logger = new Logger(HealthService.name);

    async getHealth(): Promise<HealthStatus> {
        let code = HealthCode.Healthy;

        try {
            await sql`SELECT 1`;
        } catch (err) {
            this.logger.error(err);
            code = HealthCode.Degraded;
        }
        return { code };
    }
}
