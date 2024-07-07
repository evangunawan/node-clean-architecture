import { inject, injectable } from 'tsyringe';
import { CommonUseCase } from '../common/usecase';
import { PostRepository } from '../../repository/post.repository';
import { PostResultDto } from '../../dto/post.dto';

@injectable()
export class FetchPostUsecase extends CommonUseCase<Promise<PostResultDto[]>> {
  constructor(
    @inject('PostRepository') private postRepository: PostRepository,
  ) {
    super();
  }

  public async execute(): Promise<PostResultDto[]> {
    const result = await this.postRepository.fetchPosts();
    return result.map((data) => new PostResultDto(data));
  }
}
