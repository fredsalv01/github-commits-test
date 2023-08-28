import { Injectable } from '@nestjs/common';
import { HttpCustomService } from 'src/providers/http/http.service';
import { Commit } from './entities/commit.entity';

@Injectable()
export class CommitsService {
  constructor(private readonly httpService: HttpCustomService) {}

  async findAll() {
    const githubResponse = await this.httpService.apiFindAll();
    const commits = githubResponse.map((commit): Commit => {
      return {
        id: commit.sha,
        message: commit.commit.message,
        author: commit.commit.author.name,
        url: commit.html_url,
        date: commit.commit.author.date,
      } as Commit;
    });
    return commits;
  }

}
