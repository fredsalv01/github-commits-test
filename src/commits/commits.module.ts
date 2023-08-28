import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsController } from './commits.controller';
import { ProvidersModule } from 'src/providers/providers.module';
import { HttpCustomService } from 'src/providers/http/http.service';

@Module({
  imports: [ProvidersModule],
  controllers: [CommitsController],
  providers: [CommitsService, HttpCustomService],
})
export class CommitsModule {}
