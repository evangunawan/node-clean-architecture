import { inject, injectable } from 'tsyringe';
import { PostRepository } from '../repository/post.repository';
import { PostResultDto } from '../dto/post.dto';

@injectable()
export class PostUsecase {
  constructor(
    @inject('PostRepository') private postRepository: PostRepository,
  ) {}

  public async getPosts(): Promise<PostResultDto[]> {
    const result = await this.postRepository.fetchPosts();
    return result.map((data) => new PostResultDto(data));
  }
}
