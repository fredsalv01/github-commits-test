import { Injectable } from '@nestjs/common';
import { CreateCommitDto } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';
import { HttpCustomService } from 'src/providers/http/http.service';
import { Commit } from './entities/commit.entity';

@Injectable()
export class CommitsService {
  constructor(private readonly httpService: HttpCustomService) {}

  create(createCommitDto: CreateCommitDto) {
    return 'This action adds a new commit';
  }

  async findAll() {
    const githubResponse = await this.httpService.apiFindAll();
    const commits = githubResponse.map((commit): Commit => {
      return {
        id: commit.sha,
        message: commit.commit.message,
        author: commit.commit.author.name,
        date: commit.commit.author.date,
      } as Commit;
    });
    return githubResponse;
  }

  findOne(id: number) {
    return `This action returns a #${id} commit`;
  }

  update(id: number, updateCommitDto: UpdateCommitDto) {
    return `This action updates a #${id} commit`;
  }

  remove(id: number) {
    return `This action removes a #${id} commit`;
  }
}
