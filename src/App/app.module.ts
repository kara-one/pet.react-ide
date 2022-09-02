import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminModule } from './admin/admin.module';
import { ApiModule } from './api/api.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/',
      rootPath: join(__dirname, '..', '..', 'distApp'),
    }),
    ApiModule,
    AdminModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
