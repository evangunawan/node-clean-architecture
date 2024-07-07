import { Post } from '../entity/post.entity';
import { PostCreateDto } from '../dto/post.dto';

export interface PostRepository {
  fetchPosts(type?: string): Promise<Post[]>;

  createPost(post: Post): Promise<Post>;
}
