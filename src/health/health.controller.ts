import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';
import { HealthStatus } from './entities/health.entity';

@ApiTags('health')
@Controller('health')
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get()
    @ApiOkResponse({
        description: 'Health status',
        type: HealthStatus,
    })
    getHealth(): Promise<HealthStatus> {
        return this.healthService.getHealth();
    }
}
