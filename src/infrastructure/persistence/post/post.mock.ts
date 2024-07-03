import { PostRepository } from '../../../app/repository/post.repository';
import { Post } from '../../../app/entity/post.entity';

export class PostMockRepository implements PostRepository {
  public async fetchPosts(type?: string): Promise<Post[]> {
    return new Promise((resolve) => {
      return resolve([
        new Post('1', 'text', 'Bonny'),
        new Post('2', 'text', 'Cookie'),
        new Post('3', 'text', 'Arthur'),
      ]);
    });
  }
}
