import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostalModule } from './postal/postal.module';

@Module({
  imports: [
    PostalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
