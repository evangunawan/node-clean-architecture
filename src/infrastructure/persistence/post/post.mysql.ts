import { Post } from '../../../app/entity/post.entity';
import { PostRepository } from '../../../app/repository/post.repository';
import { injectable } from 'tsyringe';

@injectable()
export class PostMySqlRepository implements PostRepository {
  fetchPosts(type?: string): Promise<Post[]> {
    throw new Error('Method not implemented.');
  }
}
