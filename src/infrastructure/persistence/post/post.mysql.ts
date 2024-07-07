import { Post } from '../../../app/entity/post.entity';
import { PostRepository } from '../../../app/repository/post.repository';
import { injectable } from 'tsyringe';

@injectable()
export class PostMySqlRepository implements PostRepository {
  createPost(): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  fetchPosts(): Promise<Post[]> {
    throw new Error('Method not implemented.');
  }
}
