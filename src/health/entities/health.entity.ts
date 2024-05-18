import { ApiProperty } from '@nestjs/swagger';

export enum HealthCode {
    Healthy = 'healthy',
    Degraded = 'degraded',
}

export class HealthStatus {
    @ApiProperty({ enum: HealthCode, enumName: 'HealthCode' })
    code: HealthCode;
}
