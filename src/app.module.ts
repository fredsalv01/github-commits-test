import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CommitsModule],
})
export class AppModule {}
