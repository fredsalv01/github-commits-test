import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { HttpCustomService } from './http/http.service';
import { ConfigModule } from '@nestjs/config';
@Global()
@Module({
  imports: [ConfigModule, HttpModule],
  providers: [HttpCustomService],
  exports: [HttpModule, HttpCustomService],
})
export class ProvidersModule {}
