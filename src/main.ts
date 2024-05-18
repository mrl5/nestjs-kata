import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );

    const config = new DocumentBuilder()
        .setTitle('NestJS')
        .setDescription('NestJS API ')
        .setVersion('0.0.1')
        .addTag('foobar')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('oas', app, document);

    app.enableShutdownHooks();
    await app.listen(3000);
}

bootstrap();
