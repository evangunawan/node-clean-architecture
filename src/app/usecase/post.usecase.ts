import { inject, injectable } from 'tsyringe';
import { PostRepository } from '../repository/post.repository';
import { Post } from '../entity/post.entity';

@injectable()
export class PostUsecase {
  constructor(
    @inject('PostRepository') private postRepository: PostRepository,
  ) {}

  public async getPosts(): Promise<Post[]> {
    return this.postRepository.fetchPosts();
  }
}
