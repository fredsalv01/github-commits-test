import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}

  public async apiFindAll() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          'https://api.github.com/repos/fredsalv01/github-commits-test/commits',
        ),
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
