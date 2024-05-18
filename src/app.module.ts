import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { SqlModule } from './sql/sql.module';

@Module({
    imports: [HealthModule, SqlModule],
})
export class AppModule {}
