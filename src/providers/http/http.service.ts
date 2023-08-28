import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}

  DEFAULT_BACKEND_LINK_GITHUB =
    'https://api.github.com/repos/fredsalv01/github-commits-test/commits';

  public async apiFindAll() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          process.env.BACKEND_LINK_GITHUB ?? this.DEFAULT_BACKEND_LINK_GITHUB,
        ),
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
