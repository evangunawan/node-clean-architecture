import { PostRepository } from '../../../app/repository/post.repository';
import { Post } from '../../../app/entity/post.entity';

export class PostMockRepository implements PostRepository {
  public async fetchPosts(type?: string): Promise<Post[]> {
    return new Promise((resolve) => {
      const dummy1 = new Post('text', 'Lorem ipsum dolor sit amet.');
      dummy1.id = '1';
      return resolve([dummy1]);
    });
  }

  public async createPost(post: Post): Promise<Post> {
    return new Promise((resolve) => {
      const randomId = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
      post.id = String(randomId);
      return resolve(post);
    });
  }
}
