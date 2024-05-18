import { Injectable, OnApplicationShutdown, Logger } from '@nestjs/common';
import 'dotenv/config';
import postgres = require('postgres');

const {
    // DB_HOST,
    LOCAL_DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    APPLICATION_NAME,
} = process.env;

export const sql = postgres({
    host: LOCAL_DB_HOST,
    port: Number(DB_PORT),
    database: DB_NAME,
    user: DB_USER,
    pass: DB_PASSWORD,
    connection: {
        application_name: APPLICATION_NAME,
    },
});

@Injectable()
export class SqlService implements OnApplicationShutdown {
    private readonly logger = new Logger(SqlService.name);
    async onApplicationShutdown() {
        this.logger.log('Closing database connections');
        await sql.end({ timeout: 5 });
        this.logger.log('Database connections closed');
    }
}
